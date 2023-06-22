import {UserProps} from "@domain/User";
import {UseCase} from "@application/interfaces/use-cases/UseCase";

export interface CreateUserInterface extends UseCase<CreateUserInterface.Request, CreateUserInterface.Response> {
    execute(postData: CreateUserInterface.Request): Promise<CreateUserInterface.Response>
}

export namespace CreateUserInterface {
    export type Request = Omit<UserProps, 'id'>;
    export type Response = string;
}