import { Router } from "express";
import * as controllers from "../../controllers/user.contoroller";
import authtoken from "../../middleware/auth.middleware";
const routes = Router();
routes
  .route("/")
  .post(controllers.create)
  .get(authtoken, controllers.getall);
routes
  .route("/:id")
  .get(authtoken, controllers.getone)
  .patch(authtoken, controllers.update)
  .delete(authtoken, controllers.deletes);
routes.route("/auth").post(controllers.authenticate);
export default routes;
