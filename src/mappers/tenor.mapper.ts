import { GifType } from "../types";
import { BaseMapper } from "./base.mapper";

export class TenorMapper extends BaseMapper {
    constructor(url: string){
        super(url);
    }
    
    extractDataFromResponse(response: any): GifType[] {      
        return response.results.map((item:any) => ({
            id: item.id,
            title: item.title,
            url: item.media[0].gif.url
        }));
    }
}