"use server";

import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { logoNameSchema } from "@/data/logos";

export default async function voteForLogo(prevState: any, formData: FormData) {
    console.log("executed on server");
    console.log(formData.get("name"));

    try {
        const name = logoNameSchema.parse(formData.get("name"));

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
