import express from "express"
import routes from "../routes"

const globalRouter = express.Router();

globalRouter.get(routes.home, home
globalRouter.get(routes.join, search
globalRouter.get(routes.login, (req, res) => res.send("Loggin"))
globalRouter.get(routes.logout, (req, res) => res.send("Loggout"))
globalRouter.get(routes.search, (req, res) => res.send("Search"))


export default globalRouter;