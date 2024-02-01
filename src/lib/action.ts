"use server";

import { db } from "../../prisma/db.server";
import { revalidatePath } from "next/cache";
import { ContactForm } from "./definiton/definition";

export async function contactFormAction(data: ContactForm) {
  const { firstName, lastName, email, organization, message } = data;

  try {
    await db.contacted.create({
      data: {
        name: firstName + " " + lastName,
        email,
        organization,
        message,
      },
    });
  } catch (error) {
    return {
      error: "Database Error : Error dalam mengirimkan pesan",
    };
  }

  revalidatePath("/contact-us");
}
