import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../erros";
import Contact from "../../entities/contact.entities";

const ensureContactEmailAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

  if (req.body.email) {
    const contact: Contact | null = await contactRepository.findOne({
      where: {
        email: req.body.email,
      },
    });
    
    if (contact) {
        throw new AppError("Contact already exists", 409)
    }
  }

  return next()
};

export {ensureContactEmailAlreadyExistsMiddleware}