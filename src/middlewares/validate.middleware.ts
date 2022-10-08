import { Request, Response, NextFunction } from "express";

export function validateMiddleware(req : Request, res: Response, next: NextFunction){
    const searchKey = req.query.searchKey as string;

    if (!searchKey) {
        return res.status(400).send({
            message: "Please provide search value"
        })
    }

    next();
}