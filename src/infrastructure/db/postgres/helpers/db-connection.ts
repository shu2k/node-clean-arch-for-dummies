import {Client, QueryResult} from "pg";

class DbConnection {
    private client: Client;

    constructor() {
        this.client = new Client()
    }

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
    }

    async query(text: string, values: any[]): Promise<QueryResult> {
        return await this.client.query(text, values)!
    }
}
export default new DbConnection()