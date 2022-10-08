import { Express } from 'express';

// import all routes 
import { GifRouter } from './gif.router';

export function loadRoutes(express: Express){

    // health-check endpoint
    express.use('/ping', (req, res) => {
        res.send("pong")
    })
    

    express.use('/api/gif', GifRouter)
}