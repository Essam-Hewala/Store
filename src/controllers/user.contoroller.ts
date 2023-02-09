import { NextFunction, Request, Response } from "express";
import Usermodel from "../models/user.model";
import config from "../config";
import jsonwebtoken from "jsonwebtoken";
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
export const getall = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usermodel.getall(req.body);
    res.json({
      message: "Get * From Users",
      data: { ...user },
    });
  } catch {
    next(Error);
  }
};
export const getone = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usermodel.getone(req.params.id as unknown as string);
    res.json({
      message: "Get Specific From Users",
      data: { ...user },
    });
  } catch {
    next(Error);
  }
};
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usermodel.getone(req.body);
    res.json({
      message: "Update Specific From Users",
      data: { ...user },
    });
  } catch {
    next(Error);
  }
};
export const deletes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usermodel.deletes(req.params.id as unknown as string);
    res.json({
      message: "Delete  From Users",
      data: { ...user },
    });
  } catch {
    next(Error);
  }
};
export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;
    const user = await usermodel.authenticate(username, password);
    const token = jsonwebtoken.sign(
      { user },
      config.token as unknown as string
    );
    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "The Username And Password Not Match",
      });
    } else {
      res.json({
        message: "Checked User And Password",
        data: { ...user, token },
      });
    }
  } catch {
    next(Error);
  }
};
