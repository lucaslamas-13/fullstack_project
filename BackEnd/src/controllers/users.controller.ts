import { Response, Request } from "express";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
} from "../interfaces/users.intefaces";
import createUserService from "../services/users/createUser.service";
import { deleteUsersService } from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import { updateUserService } from "../services/users/updateUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body;
  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listUsersService();
  return res.status(200).json(users);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserUpdateRequest = req.body;
  const userId: number = Number(req.params.id);

  const newUserData = await updateUserService(userData, userId);

  return res.status(200).json(newUserData);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(req.params.id);

  await deleteUsersService(userId);

  return res.status(204).send();
};

export {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
};
