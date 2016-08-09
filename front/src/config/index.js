module.exports = {
    http: {
        hostname    : 'localhost',
        port        : process.env.API_PORT || 9011,
        version     : 'v1',
        // mode        : 'no-cors'
    },
    ui : {
        devTool : process.env.NODE_ENV != 'production',
    },
}
