import { Router } from "express";
import UserRoutes from "./operations/users.routes";
import ProductRoutes from "./operations/product.routes";
import OrderRoutes from "./operations/order.rotes";
import Order_productRoutes from "./operations/order-prodcut.routes"
const routes = Router();
routes.use("/users", UserRoutes);
routes.use("/product", ProductRoutes);
routes.use("/order", OrderRoutes);
routes.use("/op", Order_productRoutes);
export default routes;
