import { Repository } from "typeorm";
import { TUserRequest, TUserResponse } from "../../interfaces/users.intefaces";
import User from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schema";

const createUserService = async (userData: TUserRequest): Promise<TUserResponse> => {
    
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User = userRepository.create(userData);
    await userRepository.save(user)

    const returnUser = userSchemaResponse.parse(user)

    return returnUser
}

export default createUserService