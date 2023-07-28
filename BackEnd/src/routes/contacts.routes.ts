import { Router } from "express";
import { ensureBodyIsValidMiddleware } from "../middlewares/ensureBodyIsValid.middlewares";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schema";
import { ensureEmailAlreadyExistsMiddleware } from "../middlewares/users/ensureEmailAlreadyExists.middlewares";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controller";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares";
import { ensureContactIdIsValidMiddleware } from "../middlewares/contact/ensureContactIdIsValid.middlewares";
import { ensureIsOwnerMiddleware } from "../middlewares/contact/ensureIsOwner.middlewares";
import { ensureContactEmailAlreadyExistsMiddleware } from "../middlewares/contact/ensureContactEmailAlreadyExists.middlewares";

const contactRoutes = Router()

contactRoutes.post(
    "",
    ensureBodyIsValidMiddleware(contactSchemaRequest),
    ensureTokenIsValidMiddleware,
    ensureEmailAlreadyExistsMiddleware,
    ensureContactEmailAlreadyExistsMiddleware,
    createContactController
    )

contactRoutes.get(
    "",
    ensureTokenIsValidMiddleware,
    listContactController
)

contactRoutes.patch(
    "/:id",
    ensureTokenIsValidMiddleware,
    ensureIsOwnerMiddleware,
    ensureBodyIsValidMiddleware(contactSchemaUpdate),
    ensureContactIdIsValidMiddleware,
    ensureEmailAlreadyExistsMiddleware,
    ensureContactEmailAlreadyExistsMiddleware,
    updateContactController
)

contactRoutes.delete(
    "/:id",
    ensureTokenIsValidMiddleware,
    ensureIsOwnerMiddleware,
    ensureContactIdIsValidMiddleware,
    deleteContactController
)

export {contactRoutes}