import { NextFunction, Request, Response } from "express";

export const IsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRole = req.userRole;
  if (userRole !== "ADMIN") {
    res
      .status(403)
      .json({ message: "You are not authorized to perform this action." });
    return;
  }
  next();
};
export const IsJudge = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRole = req.userRole;
  if (userRole !== "JUDGE") {
    res
      .status(403)
      .json({ message: "You are not authorized to perform this action." });
    return;
  }
  next();
};
