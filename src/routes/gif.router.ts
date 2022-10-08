import express from 'express';

// import controller handlers
import { searchGif } from '../controllers/gif.controller';

// import middlewares
import { validateMiddleware } from '../middlewares/validate.middleware';
import { storeMiddleware } from '../middlewares/store.middleware';


// store
import { store } from '../store';
import { ENV } from '../config';

import { BaseMapper } from '../mappers/base.mapper';
import { GifyMapper } from '../mappers/gify.mapper';
import { TenorMapper } from '../mappers/tenor.mapper';



// supported api providers
// @note: we can make api url as environment variable.
const Providers: { [key: string]: any } = {
    'gify': {
        class: new GifyMapper("https://api.giphy.com/v1/gifs/search?api_key=JmbCSahlILCYnljTBMxCEDPHLqVU15nH&q="),
    },
    'tenor': {
        class: new TenorMapper("https://g.tenor.com/v1/search?key=LIVDSRZULELA&limit=50&q=")
    }
};


const getAndInitProvider = (): BaseMapper => {
    const currentProvider = Providers[ENV.PROVIDER];
    if (currentProvider) {
        return currentProvider.class;
    }

    return Providers['gify'].class; // default fallback to gify api
}


// dynamically initialize the provider
let provider: BaseMapper = getAndInitProvider();


const router = express.Router();

router.get('/search', validateMiddleware, storeMiddleware(store), searchGif(store, provider));

export {
    router as GifRouter
};
