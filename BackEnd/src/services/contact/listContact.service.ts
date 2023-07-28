import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entities";
import User from "../../entities/user.entities";
import { TAllContactsResponse } from "../../interfaces/contacts.interfaces";
import { AppError } from "../../erros";
import { allContactSchemaResponse } from "../../schemas/contacts.schema";

const listContactService = async (
  userId: number
): Promise<TAllContactsResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: Number(userId),
    },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const contacts: Contact[] = await contactRepository.find({
    where: {
      user: {
        id: Number(userId),
      },
    },
  });

  const returnContact = allContactSchemaResponse.parse(contacts);

  return returnContact;
};

export { listContactService };
