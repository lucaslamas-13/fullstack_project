import { z } from "zod";

export const schema = z.object({
    name: z.string(),
    email: z.string().email("Deve ser um e-mail"),
    phoneNumber:z.string().max(11, "deve ter no máximo 11 digitos")
})

export type ContactData = z.infer<typeof schema>