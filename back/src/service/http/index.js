import {createServer}       from 'http'
import {createUrlParser}    from './parser'




const on = ( server, verb, route, handler ) => {

    const parse = createUrlParser( verb, route )

    server.on( 'request', (request, response) => {


        const u = parse( request )

        if ( !u )
            // pass
            return

        let buffer = ''

        request.on('data', x => buffer += x )
        request.on('end', () => {

            try {
                u.body = JSON.parse( buffer )
            } catch( err ){}

            Promise.resolve()

                .then( () => handler( u ) )

                .then( res => {
                    response.writeHead(200, {'Access-Control-Allow-Origin': '*'})
                    response.end( res && JSON.stringify( res ) )
                })
                .catch( err => {
                    console.log( err.stack  )
                    response.writeHead(500)
                    response.end( JSON.stringify( err ) )
                })

        })

    })
}

const init = ( config={} ) => {

    const server = createServer()

    server.listen( config.port )

    return Promise.resolve({

        on  : ( ...args ) => on( server, ...args ),

        get : ( ...args ) => on( server, 'GET', ...args ),

        post : ( ...args ) => on( server, 'POST', ...args ),

        destroy : () =>
            server.close()
        ,
    })
}

module.exports = init
