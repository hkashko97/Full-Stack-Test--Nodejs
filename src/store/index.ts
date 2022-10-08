import cache from 'node-cache';
import { StoreData } from '../types';

const store = new cache({ stdTTL: 30, checkperiod: 32 });


store.on('receiveData', ({ key, data }: StoreData) => {
    store.set(key, data)
})


export { store }
