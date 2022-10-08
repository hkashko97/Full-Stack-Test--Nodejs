import { Request, Response, NextFunction } from "express";
import NodeCache from "node-cache";

export const storeMiddleware = (store: NodeCache) => {
  
  return (req : Request, res: Response, next: NextFunction) => {
    const searchKey = req.query.searchKey as string;

      // check cache and retrieve data
      const hasCache = store.get(searchKey);
      if (hasCache) {
          return res.json(hasCache)
      }

    next();
  }
}