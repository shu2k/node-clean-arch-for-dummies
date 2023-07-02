import express, {Express} from "express";
import setupRoutes from "@main/config/routes"
import setupMiddlewares from '@main/config/middlewares'


export default (): Express => {
    const app = express()
    setupMiddlewares(app)
    setupRoutes(app)
    return app
}