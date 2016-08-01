
const handlers = [
    require('./room'),
    require('./user'),
]


const init = ( ...args ) =>
    Promise.all( handlers.map( h => h( ...args ) ) )

module.exports = init
