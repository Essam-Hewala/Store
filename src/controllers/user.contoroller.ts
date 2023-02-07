import { NextFunction, Request, Response } from "express";
import Usermodel from "../models/user.model";
const usermodel = new Usermodel();
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usermodel.create(req.body);
    res.json({
      message: "Creating User Using API Request",
      data: { ...user },
    });
  } catch {
    next(Error);
  }
};
