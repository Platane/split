
import querystring  from 'querystring'
import url          from 'url'

/**
 *
 * toStart accept
 *   - pathname
 *   - query ( as object )
 *   - hash
 *   - body
 *   - method
 *
 *   - resType
 *
 */

const request = ( options = {} ) =>

    fetch(
        url.format({
            ...options,
            query: querystring.stringify( options.query || {} )
        }),
        { ...options }
    )
        .then( res => res.json() )

module.exports = ( options = {} ) =>

    store =>

        store.register( store.service.http.toStart, ([ next, ...rest ]) => {

            next && request({ ...options, ...next })
                .then( res => store.dispatch({ type: next.resType || 'success-request', payload: res, meta: next.meta  }) )
                .then( error => store.dispatch({ type: 'fail-request', payload: { error }, meta: next.meta  }) )

            next && store.dispatch({ type: 'start-request', meta: next.meta  })
        })
