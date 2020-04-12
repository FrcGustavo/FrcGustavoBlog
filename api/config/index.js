require('dotenv').config();

const config = {
    srv: {
        port: process.env.PORT || 3000
    },
    db: {

    }
}

module.exports = config;