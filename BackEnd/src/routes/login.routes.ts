import { Router } from "express";
import { ensureBodyIsValidMiddleware } from "../middlewares/ensureBodyIsValid.middlewares";
import { requestLoginSchema } from "../schemas/login.schema";
import { loginUsersController } from "../controllers/login.controller";

const loginRoutes = Router()

loginRoutes.post(
    "",
    ensureBodyIsValidMiddleware(requestLoginSchema),
    loginUsersController
)

export {loginRoutes}