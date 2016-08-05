module.exports = {
    api: {
        host    : process.env.API_HOST,
        port    : '80',
        version : 'v1'
    },
    ui : {
        devTool : process.env.NODE_ENV != 'production',
    },
}
