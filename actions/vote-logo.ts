"use server";

import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { logoNameSchema } from "@/data/logos";
import { cookies } from "next/headers";
import { headers } from "next/headers";

export default async function voteForLogo(prevState: any, formData: FormData) {

    try {
        const name = logoNameSchema.parse(formData.get("name"));

        // really primitive rate limiting to prevent spam
        const forwardedFor = headers().get("x-forwarded-for");
        const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';
        const userAgent = headers().get("user-agent") || "unknown";
        let userId = cookies().get("userId")?.value;
        if (!userId) {
            userId = Math.random().toString(36).substring(2, 15);
            cookies().set("userId", userId, { maxAge: 365 * 24 * 60 * 60 });
        }

        const existingVote = await sql`
            SELECT * FROM vote_logs
            WHERE ip = ${ip} OR user_id = ${userId}
        `;

        if (existingVote.rows.length > 0) {
            return {
                message: "You have already voted. Only one vote per visitor is allowed.",
                isError: true,
            };
        }

        //log vote
        await sql`
            INSERT INTO vote_logs (ip, user_agent, user_id, logo_name, timestamp)
            VALUES (${ip}, ${userAgent}, ${userId}, ${name}, NOW())
        `;

        //add vote
        await sql`
            INSERT INTO logo_votes (name, votes)
            VALUES (${name}, 1)
            ON CONFLICT (name) DO UPDATE
            SET votes = logo_votes.votes + 1
        `;

        revalidatePath("/");
        return {
            message: `Thanks for your vote!`,
            isError: false,
        };
    } catch (e: any) {
        console.log(e);
        return {
            message: `Failed to process your vote: ${e.message}`,
            isError: true,
        };
    }
}
