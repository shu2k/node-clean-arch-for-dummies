import {Express, Router} from "express";
import userRoutes from "@main/routes/user-routes";

export default (app: Express): void => {
    const router = Router()
    app.use("/api", router)
    userRoutes(router)
}