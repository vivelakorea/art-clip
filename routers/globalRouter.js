import express from "express"
import { home, search } from "../controllers/imageController";
import { join, login, logout, showcase } from "../controllers/uesrController";
import routes from "../routes"

const globalRouter = express.Router();

globalRouter.get(routes.home, home)
globalRouter.get(routes.join, join)
globalRouter.get(routes.login, login)
globalRouter.get(routes.logout, logout)
globalRouter.get(routes.search, search)
globalRouter.get(routes.showcase, showcase)


export default globalRouter;