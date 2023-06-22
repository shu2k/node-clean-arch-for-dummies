import {Router} from "express";
import {expressRouteAdapter} from "@main/adapters/express-route-adapter";
import {makeCreateUserController} from "@main/factories/controllers/users/create-user/controller-factory";

export default (router: Router): void => {
    router.post('/user', expressRouteAdapter(makeCreateUserController()))
}