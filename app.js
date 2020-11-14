import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter"
import imageRouter from "./routers/imageRouter"
import globalRouter from "./routers/globalRouter"
import routes from "./routes"
const app = express();



//middleware

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));


app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.images, imageRouter)


export default app;