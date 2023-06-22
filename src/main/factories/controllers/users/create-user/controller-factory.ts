import {BaseController} from "@infrastructure/http/controllers/BaseController";
import {CreateUserController} from "@infrastructure/http/controllers/users/CreateUserController";
import {makeCreateUserValidation} from "@main/factories/controllers/users/create-user/validation-factory";
import {makeCreatePost} from "@main/factories/use-cases/users/create-user-factory";

export const makeCreateUserController = (): BaseController => {
    const validation = new makeCreateUserValidation()
    const useCase = makeCreatePost()
    return new CreateUserController(validation, useCase)
}