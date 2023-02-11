import { NextFunction, Request, Response } from "express";
import Ordermodel from "../models/order.model";
const ordermodel = new Ordermodel(); 
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await ordermodel.create(req.body);
    res.json({
      message: "Creating An Order Using API Request",
      data: { ...order },
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
    const order = await ordermodel.getall(req.body);
    res.json({
      message: "Get * From Orders",
      data: { ...order },
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
    const order = await ordermodel.getone(req.params.id as unknown as string);
    res.json({
      message: "Get Specific Order",
      data: { ...order },
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
    const order = await ordermodel.getone(req.body);
    res.json({
      message: "Get Specific From Product",
      data: { ...order },
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
    const order = await ordermodel.deletes(req.params.id as unknown as string);
    res.json({
      message: "Delete  From Orders",
      data: { ...order },
    });
  } catch {
    next(Error);
  }
};
