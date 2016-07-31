
const handlers = [
    require('./room')
]


const init = ( ...args ) =>
    Promise.all( handlers.map( h => h( ...args ) ) )

module.exports = init
