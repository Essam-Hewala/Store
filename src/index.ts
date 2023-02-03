import express , { Application } from 'express';
const port = 3150;
const app:Application = express();
app.listen(port,()=>{
    console.log(`Server Runing On Port ${port}`);
})
export default app;