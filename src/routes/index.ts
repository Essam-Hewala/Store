import { Router } from "express";
import UserRoutes from "./operations/users.routes";
import ProductRoutes from "./operations/product.routes";
import OrderRoutes from "./operations/order.rotes";
const routes = Router();
routes.use("/users", UserRoutes);
routes.use("/product", ProductRoutes);
routes.use("/order", OrderRoutes);
export default routes;
