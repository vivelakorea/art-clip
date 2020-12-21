import express from "express"
import routes from "../routes"
import {upload, imageDetail, editImage, deleteImage, images} from "../controllers/imageController"

const imageRouter = express.Router();

imageRouter.get(routes.images, images)
imageRouter.get(routes.upload, upload)
imageRouter.get(routes.imageDetail, imageDetail)
imageRouter.get(routes.editImage, editImage)
imageRouter.get(routes.deleteImage, deleteImage)

export default imageRouter;