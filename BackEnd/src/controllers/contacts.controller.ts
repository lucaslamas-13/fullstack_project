import { Response, Request } from "express";
import { TContactRequest } from "../interfaces/contacts.interfaces";
import createContactService from "../services/contact/createContact.service";
import { listContactService } from "../services/contact/listContact.service";
import { updateContactService } from "../services/contact/updateContact.service";
import { deleteContactService } from "../services/contact/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {
    const userId = Number(res.locals.id)
    const newContact = await createContactService(req.body, userId)

    return res.status(201).json(newContact)
}

const listContactController = async (req: Request, res: Response) => {
    const userId = Number(res.locals.id)
    const listContacts = await listContactService(userId)

    return res.status(200).json(listContacts)
}

const updateContactController = async (req: Request, res: Response) => {
    const contactId = Number(req.params.id)
    const updateContact = await updateContactService(req.body, contactId)

    return res.status(200).json(updateContact)
}

const deleteContactController = async (req: Request, res: Response) => {
    const contactId = Number(req.params.id)
    await deleteContactService(contactId)

    return res.status(204).send()
}

export { createContactController, listContactController, updateContactController, deleteContactController }