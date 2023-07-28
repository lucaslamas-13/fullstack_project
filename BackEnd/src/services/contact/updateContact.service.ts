import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entities";
import { TContactResponse, TContactUpdate } from "../../interfaces/contacts.interfaces";
import { contactSchemaResponse } from "../../schemas/contacts.schema";

const updateContactService = async (contactData: TContactUpdate, contactId: number): Promise<TContactResponse> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const oldContactData: Contact | null = await contactRepository.findOneBy({
        id: contactId
    })

    const newContactData: Contact = contactRepository.create({
        ...oldContactData,
        ...contactData
    })

    await contactRepository.save(newContactData)

    const returnContact: TContactResponse = contactSchemaResponse.parse(newContactData)

    return returnContact
}

export { updateContactService }