import { z } from "zod";

export const schema = z.object({
    email: z.string().email("Deve ser um e-mail"),
    password: z.string().nonempty("Senha é obrigatória")
})

export type loginData = z.infer<typeof schema>


