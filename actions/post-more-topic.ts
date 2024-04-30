"use server";

import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { z } from "zod";

const formDataSchema = z.object({
    topic: z.string(),
    time: z.string(),
  });
  
  export default async function postMoreTopics(prevState: any, formData: FormData) {
    console.log("executed on server");
    console.log(formData);
  
    try {
      const data = formDataSchema.parse({
        topic: formData.get("topic"),
          time: formData.get("time"),
      });
  
      await sql`
                  INSERT INTO more_topics (topic, time)
                  VALUES (${data.topic}, ${data.time})
              `;

    revalidatePath("/");
    return { message: `Thanks for adding something.`, isError: false };
  } catch (e: any) {
    console.log(e);
    return { message: "Failed to add", isError: true };
  }
}