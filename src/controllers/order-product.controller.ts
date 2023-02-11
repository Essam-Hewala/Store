import { NextFunction, Request, Response } from "express";
import Orderproduct from "../models/order-prodcu.model";
const orderproduct = new Orderproduct(); 
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await orderproduct.create(req.body);
    res.json({
      message: "Adding  An Items To Order Order Using API Request",
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
    const order = await orderproduct.getall(req.body);
    res.json({
      message: "Get * Items Orders",
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
    const order = await orderproduct.getone(req.params.id as unknown as string);
    res.json({
      message: "Get Specific Orders Item",
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
    const order = await orderproduct.getone(req.body);
    res.json({
      message: "Get Specific From Order items",
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
    const order = await orderproduct.deletes(req.params.id as unknown as string);
    res.json({
      message: "Delete  From Orders",
      data: { ...order },
    });
  } catch {
    next(Error);
  }
};
