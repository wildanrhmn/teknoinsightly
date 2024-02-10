import { z } from "zod";

export const FormDataSchema = z.object({
  firstName: z.string().min(1, { message: "Nama depan wajib diisi" }),
  lastName: z.string(),
  email: z
    .string()
    .min(1, { message: "Email wajib diisi" })
    .email({ message: "Email tidak valid" }),
  organization: z.string(),
  message: z
    .string()
    .min(6, { message: "Pesan wajib diisi minimal 6 karakter" }),
});

export const messageDataSchema = z.object({
  id_post: z.string(),
  name: z.string().min(1, { message: "Nama wajib diisi" }),
  email: z
    .string()
    .min(1, { message: "Email wajib diisi" })
    .email({ message: "Email tidak valid" }),
  website: z.string().nullable(),
  message: z.string().min(1, { message: "Komentar wajib diisi" }),
});
