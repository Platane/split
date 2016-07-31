
const services = {
    http    : require('./http'),
    storage : require('./storage'),
}


const init = ( config={} ) => {

    const o = {
        destroy : () =>
            Promise.all(
                Object.keys(o)
                    .map( name => o[ name ].destroy && o[ name ].destroy() )
            )
    }

    return Promise.all(
        Object.keys(services)
            .map( name =>
                services[ name ]( config[ name ] )
                    .then( s => o[ name ] = s )
            )
    )
        .then( () => o )
}

module.exports = init
