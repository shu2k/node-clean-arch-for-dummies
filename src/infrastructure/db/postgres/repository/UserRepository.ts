import {CreateUserRepository} from "@application/interfaces/repository/user/CreateUserRepository";
import DbConnection from "@infrastructure/db/postgres/helpers/db-connection";

export class UserRepository implements CreateUserRepository{
    static async query(text: string, values: any[]): Promise<any>{
        return DbConnection.query(text, values)
    }

    async createUser(userData: CreateUserRepository.Request): Promise <CreateUserRepository.Response> {
        return await UserRepository.query("INSERT INTO users(email, password) values ($1, $2) RETURNING *", [userData.email, userData.password])
    }

}