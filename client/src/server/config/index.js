import dotenv from 'dotenv';
dotenv.config();

const config = {
    server: {
        env: process.env.ENV || 'development',
        port: process.env.PORT || 3000
    }
}

export default config;