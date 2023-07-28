import { Repository } from "typeorm";
import Contact from "../../entities/contact.entities";
import { AppDataSource } from "../../data-source";

const deleteContactService = async (contactId: number): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });

  await contactRepository.remove(contact!);
};

export { deleteContactService };
