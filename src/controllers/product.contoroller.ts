import { NextFunction, Request, Response } from "express";
import Productmodel from "../models/product.model";
const productmodel = new Productmodel();
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await productmodel.create(req.body);
    res.json({
      message: "Creating A Product Using API Request",
      data: { ...product },
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
    const product = await productmodel.getall(req.body);
    res.json({
      message: "Get * From Products",
      data: { ...product },
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
    const product = await productmodel.getone(
      req.params.id as unknown as string
    );
    res.json({
      message: "Get Specific Product",
      data: { ...product },
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
    const product = await productmodel.getone(req.body);
    res.json({
      message: "Get Specific From Product",
      data: { ...product },
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
    const product = await productmodel.deletes(
      req.params.id as unknown as string
    );
    res.json({
      message: "Delete  From Products",
      data: { ...product },
    });
  } catch {
    next(Error);
  }
};
