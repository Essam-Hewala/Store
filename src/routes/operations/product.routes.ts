import { Router } from "express";
import * as controllers from "../../controllers/product.contoroller";
import authtoken from "../../middleware/auth.middleware";
const routes = Router();
routes
  .route("/")
  .post(authtoken, controllers.create)
  .get(authtoken, controllers.getall);
routes
  .route("/:id")
  .get(authtoken, controllers.getone)
  .patch(authtoken, controllers.update)
  .delete(authtoken, controllers.deletes);
export default routes;
