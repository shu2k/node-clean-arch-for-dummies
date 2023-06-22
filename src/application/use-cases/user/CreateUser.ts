import {CreateUserInterface} from "@application/interfaces/use-cases/user/CreateUserInterface";
import {CreateUserRepository} from "@application/interfaces/repository/user/CreateUserRepository";

export class CreateUser implements CreateUserInterface{
    constructor(private readonly createUserRepository: CreateUserRepository) {
    }

    async execute(postData: CreateUserInterface.Request) : Promise <CreateUserInterface.Response>{
        return this.createUserRepository.createUser(postData)
    }
}