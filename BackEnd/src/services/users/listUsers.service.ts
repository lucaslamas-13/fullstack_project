
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";


import User from "../../entities/user.entities";
import { TAllUsersResponse } from "../../interfaces/users.intefaces";
import { allUsersSchemaResponse } from "../../schemas/users.schema";

const listUsersService = async (): Promise<TAllUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User[] = await userRepository.find();

  const returnUsers: TAllUsersResponse = allUsersSchemaResponse.parse(user);

  return returnUsers;
};

export default listUsersService;