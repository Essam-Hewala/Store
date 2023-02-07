import { Router} from "express";
import * as controllers from "../../controllers/user.contoroller";
const routes = Router();
routes.post("/", controllers.create);
export default routes;
