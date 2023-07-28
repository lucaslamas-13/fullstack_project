import { NextFunction, Request, Response } from "express";
import Contact from "../../entities/contact.entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../erros";

const ensureContactIdIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOne({
    where: {
      id: Number(req.params.id),
    },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};

export { ensureContactIdIsValidMiddleware };
