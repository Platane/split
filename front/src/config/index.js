module.exports = {
    http: {
        hostname    : process.env.API_HOST || 'localhost',
        port        : process.env.API_PORT || '80',
        version     : 'v1'
    },
    ui : {
        devTool : process.env.NODE_ENV != 'production',
    },
}
