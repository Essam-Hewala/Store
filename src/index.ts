import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import errormidlleware from "./middleware/error.middleware";
import config from "./config";
// import db from './database/index' connect to db
// console.log(config);
const Port = config.port || 3150;
const app: Application = express();
app.use(express.json());
// HTTP Request Middleware
app.use(morgan("common"));
// HTTP Request Secure Middleware
app.use(helmet());
// Test Main Page
app.get("/", (req: Request, res: Response) => {
  if (res.status(200)) {
    res.status(200).send("Hello");
  } else {
    throw new Error("Error Check Again");
  }
});
app.use((_req: Request, res: Response) => {
  res.status(404).send("Error in Routing ");
});
// test Connection to DB
// db.connect().then((Client)=>{
// return Client.query('select now()').then((res)=>{
//     Client.release();
//     console.log(res.rows);
// }).catch((err)=>{
// Client.release();
// console.log(err.stack);
// });
// });
// for errors
app.use(errormidlleware);
// Listen To Port 3150
app.listen(Port, () => {
  console.log(`Server Runing On Port ${Port}`);
});
export default app;
