import { Request, Response } from "express";
import { TLoginRequest, TLoginResponse } from "../interfaces/login.interfaces";
import { loginUsersService } from "../services/login/createToken.service";

const loginUsersController = async (req: Request, res: Response) => {
  const userData: TLoginRequest = req.body;
  const user: TLoginResponse = await loginUsersService(userData);

  return res.status(200).json(user);
};

export { loginUsersController };
