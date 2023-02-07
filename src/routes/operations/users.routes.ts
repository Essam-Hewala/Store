import { Router} from "express";
import * as controllers from "../../controllers/user.contoroller";
const routes = Router();
routes.route('/').post(controllers.create).get(controllers.getall);
routes.route('/:id').get(controllers.getone).patch(controllers.update).delete(controllers.deletes)
routes.route('/auth').post(controllers.authenticate);
export default routes;
