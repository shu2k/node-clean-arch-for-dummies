import DbConnection from "@infrastructure/db/postgres/helpers/db-connection";
import setupApp from "@main/config/app"
import env from '@main/config/env'

DbConnection.connect("shu2k", "localhost","test", "password",5432)
    .then(async () => {
        const app = setupApp()
        app.listen(env.port, () => {
            console.log(`Server is running on port ${env.port}`)
        })
    })