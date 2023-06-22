import dbConnection from "@infrastructure/db/postgres/helpers/db-connection";
import {CreateUserRepository} from "@application/interfaces/repository/user/CreateUserRepository";
import DbConnection from "@infrastructure/db/postgres/helpers/db-connection";

export class UserRepository implements CreateUserRepository{
    static async query(text: string, values: []): Promise<any>{
        return DbConnection.query(text, values)
    }

    async createUser(userData: CreateUserRepository.Request): Promise <CreateUserRepository.Response> {
        const user = await UserRepository.query("INSERT INTO", [])
        return "inserted"
    }

}