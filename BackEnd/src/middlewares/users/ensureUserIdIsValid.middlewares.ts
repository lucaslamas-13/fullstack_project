import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entities";
import { AppError } from "../../erros";

const ensureUserIdIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: Number(req.params.id),
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export { ensureUserIdIsValidMiddleware };
