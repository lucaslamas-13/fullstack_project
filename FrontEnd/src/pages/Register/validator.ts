import { z } from "zod";

export const schema = z.object({
    name: z.string().max(45),
    email: z.string().email("Deve ser um e-mail"),
    password: z.string().nonempty("Senha é obrigatória"),
    phoneNumber: z.string().max(11)
})

export type RegisterData = z.infer<typeof schema>