import {Request, Response , NextFunction } from "express";
import Error from "../interfaces/error.interface";
const errormidlleware = (error:Error , req : Request , res:Response , next : NextFunction)=>{
const status = error.status || 500;
const message = error.message || "Error Please Check Again";
res.status(status).json({status,message});
}
export default errormidlleware