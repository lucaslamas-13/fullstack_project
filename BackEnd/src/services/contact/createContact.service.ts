import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TContactRequest, TContactResponse } from "../../interfaces/contacts.interfaces";
import Contact from "../../entities/contact.entities";
import User from "../../entities/user.entities";
import { AppError } from "../../erros";
import { contactSchema } from "../../schemas/contacts.schema";


const createContactService = async (contactData: TContactRequest, userId: number): Promise<TContactResponse> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOne({
        where: {
          id: Number(userId)
        },
      });

      if(!user){
        throw new AppError("user not found", 404)
      }

      const contact = contactRepository.create({
        ...contactData,
        user
      })
      
      await contactRepository.save(contact)

      const returnContact = contactSchema.parse(contact)

      return returnContact
}

export default createContactService