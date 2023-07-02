import {UserProps} from "@domain/User";
import {UseCase} from "@application/interfaces/use-cases/UseCase";

export interface UpdateUserInterface extends UseCase<UpdateUserInterface.Request, UpdateUserInterface.Response> {
    execute(userData: UpdateUserInterface.Request): Promise<UpdateUserInterface.Response>
}

export namespace UpdateUserInterface {
    export type Request = Omit<UserProps, "id" | "createdAt">
    export type Response = UserProps
}