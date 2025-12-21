# configure these 4 values from repository secret
module.exports = {
    database: {
        host: process.env.DB_HOST || '<DB_HOST>',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || '<DB_NAME>',
        user: process.env.DB_USER || '<DB_USER>',
        password: process.env.DB_PASSWORD || '<DB_PASSWORD>'
    },
    port: process.env.PORT || 4000
};