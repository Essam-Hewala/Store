import express , { Application ,Request,Response} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import errormidlleware from './middleware/error.middleware';
const port = 3150;
const app:Application = express();
app.use(express.json());
// HTTP Request Middleware
app.use(morgan('common'));
// HTTP Request Secure Middleware
app.use(helmet());
// Test Main Page
app.get('/',(req:Request,res:Response)=>{
    throw new Error("Error Check Again");
    res.status(200).send("Hello");
})
app.use((_req:Request,res:Response)=>{
    res.status(404).send("Error in Routing ");
})
app.use(errormidlleware);
// Listen To Port 3150
app.listen(port,()=>{
    console.log(`Server Runing On Port ${port}`);
})
export default app;