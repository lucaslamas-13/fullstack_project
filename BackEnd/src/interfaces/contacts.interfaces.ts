import { z } from "zod";
import { contactSchema, contactSchemaRequest, allContactSchemaResponse } from "../schemas/contacts.schema";
import { DeepPartial } from "typeorm";

type TContactRequest = z.infer<typeof contactSchemaRequest>
type TContact = z.infer<typeof contactSchema>
type TContactResponse = z.infer<typeof contactSchema>
type TAllContactsResponse = z.infer<typeof allContactSchemaResponse>
type TContactUpdate = DeepPartial<TContactRequest>

export {TContactRequest, TContact, TContactResponse, TContactUpdate, TAllContactsResponse}