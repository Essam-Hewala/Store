import { Request,Response,NextFunction, json } from "express";
import config from "../config";
import Error from "../interfaces/error.interface";
import jsonwebtoken from "jsonwebtoken";
const handleerror = (next:NextFunction)=>{
    const error:Error = new Error("Login Failed");
    error.status = 401;
    next(error)
}
const authtoken =(
    req: Request,
    res:Response,
    next:NextFunction)=>{
    try{
const autheader = req.get('Authorization');
if(autheader){
const be = autheader.split(' ')[0].toLocaleLowerCase();
const token = autheader.split(' ')[1];
if(token && be ==='bearer'){
const decode = jsonwebtoken.verify(token,config.token as unknown as string);
if(decode){
    next();
}else{
    handleerror(next);
}
}else{
    handleerror(next);
}
}else{
    handleerror(next);
}
    }catch(error){
handleerror(next);
    }
};
export default authtoken;