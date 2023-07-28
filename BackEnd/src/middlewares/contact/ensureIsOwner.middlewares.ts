import { NextFunction, Request, Response } from "express";
import { AppError } from "../../erros";
import { AppDataSource } from "../../data-source";
import Contact from "../../entities/contact.entities";

const ensureIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contactId = Number(req.params.id)
    const userId = res.locals.id

    const contact = await contactRepository.findOne({
        where: {
            id: contactId
        },
        relations: {
            user: true
        }
    })

    if(!contact) {
        throw new AppError("Contact not found", 404)
    }

    if(contact.user.id != userId) {
        throw new AppError("You don`t have permissions", 403)
    }

    return next()
}

export { ensureIsOwnerMiddleware }