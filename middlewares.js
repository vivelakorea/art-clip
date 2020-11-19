import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'artclip'
    res.locals.routes = routes;
    next();
}