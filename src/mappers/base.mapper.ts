import { GifType } from "../types";

export abstract class BaseMapper {
    constructor(readonly url: string){}
    
    abstract extractDataFromResponse(data: any): Array<GifType>;
}