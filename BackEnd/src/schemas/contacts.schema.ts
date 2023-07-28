import { z } from "zod";

const contactSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    createdAt: z.string()
})

const contactSchemaRequest = contactSchema.omit({
    id: true,
    createdAt: true
})

const contactSchemaUpdate = contactSchema.omit({
    id:true
}).partial()

const contactSchemaResponse = contactSchema

const allContactSchemaResponse = z.array(contactSchema)

export { contactSchema, contactSchemaRequest, allContactSchemaResponse, contactSchemaUpdate, contactSchemaResponse}