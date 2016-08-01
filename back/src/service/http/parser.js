import {parse as parseURL}  from 'url'


export const createUrlParser = ( verb, route ) => {

    const names = []

    const expr = route.split('/')
        .map( key => {

            if ( key[0] == ':' ) {

                names.push( key.slice(1) )

                return '([\\w-]+)'

            } else

                return key
        })
        .join('\\/')


    const rg = new RegExp( '^\/?' + expr + '\/?$' )

    return request => {

        if ( request.method.toUpperCase() != verb.toUpperCase() )
            return

        const url = parseURL( request.url )

        const m = rg.exec( url.pathname )

        if ( !m )
            return

        const params = {}

        names.forEach( (name,i) => params[ name ] = m[ i+1 ] )

        return {
            params
        }
    }
}
