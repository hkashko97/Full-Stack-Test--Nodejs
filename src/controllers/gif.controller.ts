import { Request, Response } from "express";
import fetch from "node-fetch";
import NodeCache from "node-cache";

// mappers
import { BaseMapper } from "../mappers/base.mapper";

const searchGif = (store: NodeCache, provider: BaseMapper) =>  async (req: Request, res: Response) => {
    const searchKey = req.query.searchKey as string;

    try {

        const response = await fetch(provider.url + searchKey);
        const jsonResponse = await response.json();

        // extract only the needed values
        const data = provider.extractDataFromResponse(jsonResponse);

        // store the result in cache
        store.emit('receiveData', {
            key: searchKey,
            data
        });

        return res.json(data);
    } catch (err) {
        console.log(err);
        
        return res.status(500).json({
            message: "Error happened, please try again later."
        })
    }
};


export {
    searchGif
}