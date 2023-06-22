import {Client, QueryResult} from "pg";

class DbConnection {
    private client: Client;

    async connect(user: string, host: string, database: string, password: string, port: number): Promise<void> {
        this.client = new Client({
            user,
            host,
            database,
            password,
            port
        })
        await this.client.connect()
    }

    async disconnect(): Promise<void> {
        await this.client.end()
    }

    async query(text: string, values: []): Promise<QueryResult> {
        return  this.client.query(text, values)
    }
}
export default new DbConnection()