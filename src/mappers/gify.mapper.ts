import { GifType } from "../types";
import { BaseMapper } from "./base.mapper";

export class GifyMapper extends BaseMapper {
    constructor(url: string){
        super(url);
    }
    
    extractDataFromResponse(response: any): GifType[] {
        return response.data.map((item:any) => ({
            id: item.id,
            title: item.title,
            url: item.images.fixed_height.url,
        }));
    }
}