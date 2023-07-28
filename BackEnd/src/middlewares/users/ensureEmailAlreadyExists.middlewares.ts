import { NextFunction, Request, Response } from "express";
import User from "../../entities/user.entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../erros";

const ensureEmailAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  if (req.body.email) {
    const user: User | null = await userRepository.findOne({
      where: {
        email: req.body.email,
      },
    });
    
    if (user) {
        throw new AppError("Email already exists", 409)
    }
  }

  return next()
};

export {ensureEmailAlreadyExistsMiddleware}