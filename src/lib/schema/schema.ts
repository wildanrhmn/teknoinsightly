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
