"use server";

import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { z } from "zod";

const formDataSchema = z.object({
  email: z.string().email(),
  name: z.string(),
});

export default async function joinWaitlist(prevState: any, formData: FormData) {
  console.log("executed on server");
  console.log(formData);

  try {
    const data = formDataSchema.parse({
      email: formData.get("email"),
      name: formData.get("name"),
    });

    await sql`
                INSERT INTO waitlist_signups (email, name)
                VALUES (${data.email}, ${data.name})
            `;

    revalidatePath("/");
    return { message: `Thanks for signing up!`, isError: false };
  } catch (e: any) {
    console.log(e);
    if (e.code === "23505") {
      return { message: "Email already exists", isError: true };
    }
    return { message: "Failed to signup", isError: true };
  }
}