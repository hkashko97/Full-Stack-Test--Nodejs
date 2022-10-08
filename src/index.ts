import express from "express";
import cors from 'cors';

// load env
import { ENV } from './config';

import { loadRoutes } from "./routes/index.router";

const app = express();

app.use(cors());


// load routes
loadRoutes(app);



app.listen(ENV.PORT, () => {
    console.log("server started on port ", ENV.PORT);
})