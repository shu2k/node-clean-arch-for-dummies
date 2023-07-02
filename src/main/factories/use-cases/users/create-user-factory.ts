import {CreateUserInterface} from "@application/interfaces/use-cases/user/CreateUserInterface";
import {CreateUser} from "@application/use-cases/user/CreateUser";
import {UserRepository} from "@infrastructure/db/postgres/repository/UserRepository";

export const makeCreatePost = (): CreateUserInterface => {
    const userRepository = new UserRepository();
    return new CreateUser(userRepository)
}