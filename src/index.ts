import express , { Application ,Request,Response} from 'express';
const port = 3150;
const app:Application = express();
app.get('/',(req:Request,res:Response)=>{
    res.send("Hello");
})
app.listen(port,()=>{
    console.log(`Server Runing On Port ${port}`);
})
export default app;