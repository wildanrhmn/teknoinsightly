"use server";

import { db } from "../../prisma/db.server";
import { revalidatePath } from "next/cache";
import { ContactForm, Comment } from "./definiton/definition";

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

export async function commentFormAction(data: any) {
  const { name, email, website, message, id_post } = data;

  try{
    await db.comment.create({
      data: {
        name,
        email,
        website,
        message,
        id_post,
      }
    })
  } catch (error) {
    return {
      error: "Database Error : Error dalam mengirimkan komentar",
    };
  }

  revalidatePath("/article/article-detail/[slug]", "page");
}
