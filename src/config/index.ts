import { config } from 'dotenv';

config();

const ENV = {
    PORT: process.env.PORT,
    API_URL: process.env.API_URL,
    PROVIDER: process.env.PROVIDER as string
};

export {
    ENV
}