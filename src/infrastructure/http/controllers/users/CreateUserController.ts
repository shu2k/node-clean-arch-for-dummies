import {BaseController} from "@infrastructure/http/controllers/BaseController";
import {Validation} from "@infrastructure/http/interfaces/Validation";
import {CreateUserInterface} from "@application/interfaces/use-cases/user/CreateUserInterface";
import {HttpRequest} from "@infrastructure/http/interfaces/HttpRequest";
import {HttpResponse} from "@infrastructure/http/interfaces/HttpResponse";
import {ok} from "@infrastructure/http/helpers/http";
import * as console from "console";

export class CreateUserController extends BaseController {
    constructor(private readonly creatUserValidation: Validation, private readonly createUser: CreateUserInterface) {
        super(creatUserValidation);
    }

    async execute(httpRequest: CreateUserController.Request): Promise<CreateUserController.Response> {
        console.log("@@")
        const userId = httpRequest.userId!
        const {firstName, lastName, email, password, createdAt, updatedAt} = httpRequest.body!
        const user = await this.createUser.execute({firstName, lastName, email, password, createdAt, updatedAt})
        return {
            statusCode: 200,
            body: user
        }
    }
}

export namespace CreateUserController {
    export type Request = HttpRequest<CreateUserInterface.Request>
    export type Response = HttpResponse<{ id: string }>
}