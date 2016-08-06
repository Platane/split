
import {create}         from 'refinery-js'

module.exports = ( fragment, serviceInit ) => {

    const store = { ...create( fragment ), ...fragment }

    const services = {}

    return Promise.all(
        Object.keys( serviceInit )
            .map( name =>
                Promise.resolve()
                    .then( () => serviceInit[ name ]( store, services ) )
                    .then( s => services[ name ] = s )
            )
    )
        .then( () =>
            Object.keys( services )
                .map( name => services[ name ] && services[ name ].start && services[ name ].start( services ) )
        )

        .then( () => store.dispatch({ type:'ready' }) )

        .then( () => ({store,services}) )

}
