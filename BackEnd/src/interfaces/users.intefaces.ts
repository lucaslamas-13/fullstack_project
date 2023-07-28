import { z } from "zod";
import {
  userSchemaResponse,
  userSchema,
  userSchemaRequest,
  allUsersSchemaResponse,
  userUpdateSchemaResponse,
} from "../schemas/users.schema";
import { DeepPartial } from "typeorm";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TAllUsersResponse = z.infer<typeof allUsersSchemaResponse>;
type TUserUpdateReponse = z.infer<typeof userUpdateSchemaResponse>;
type TUserUpdateRequest = DeepPartial<TUserUpdateReponse>;

export {
  TUser,
  TUserRequest,
  TUserResponse,
  TAllUsersResponse,
  TUserUpdateRequest,
  TUserUpdateReponse,
};
