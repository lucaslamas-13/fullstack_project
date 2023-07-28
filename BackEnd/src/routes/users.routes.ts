import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controller";
import { ensureEmailAlreadyExistsMiddleware } from "../middlewares/users/ensureEmailAlreadyExists.middlewares";
import {
  userSchemaRequest,
  userUpdateSchemaRequest,
} from "../schemas/users.schema";
import { ensureBodyIsValidMiddleware } from "../middlewares/ensureBodyIsValid.middlewares";
import { ensureUserIdIsValidMiddleware } from "../middlewares/users/ensureUserIdIsValid.middlewares";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middlewares";
import { ensureAdminIsTrueMiddleware } from "../middlewares/ensureAdminIsTrue.middlewares";
import { ensureContactEmailAlreadyExistsMiddleware } from "../middlewares/contact/ensureContactEmailAlreadyExists.middlewares";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureBodyIsValidMiddleware(userSchemaRequest),
  ensureEmailAlreadyExistsMiddleware,
  ensureContactEmailAlreadyExistsMiddleware,
  createUserController
);

userRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureAdminIsTrueMiddleware,
  listUsersController
);

userRoutes.patch(
  "/:id",
  ensureBodyIsValidMiddleware(userUpdateSchemaRequest),
  ensureUserIdIsValidMiddleware,
  ensureTokenIsValidMiddleware,
  ensureAdminIsTrueMiddleware,
  ensureEmailAlreadyExistsMiddleware,
  ensureContactEmailAlreadyExistsMiddleware,
  updateUserController
);

userRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserIdIsValidMiddleware,
  ensureAdminIsTrueMiddleware,
  deleteUserController
);

export { userRoutes };
