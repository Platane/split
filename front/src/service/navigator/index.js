import querystring  from 'querystring'
import url          from 'url'



const pathEquals = ( a={}, b={} ) =>
    (a.path||[]).join('.') == (b.path||[]).join('.')

const searchEquals = ( a={}, b={} ) =>
    Object.keys(a.search||{}).length == Object.keys(b.search||{})
    && Object.keys(b.search||{}).every( k => a.search && a.search[ k ] == b.search[ k ] )


const buildUrl = ({path, param}) =>
    path.join('/') + querystring.stringify(param)


const pushState = url =>
    typeof history == 'undefined' || history.pushState( {}, '', url )

const replaceState = url =>
    typeof history == 'undefined' || history.replaceState( {}, '', url )

const setUrl = navigable => {
    const current = parseUrl()

    if ( !pathEquals( navigable, current ) )

        pushState( buildUrl( navigable ) )

    else if ( !searchEquals( navigable, current ) )

        pushState( buildUrl( navigable ) )
}

const parseLanguage = () => {
    const lang = typeof navigator != 'undefined' && ( navigator.language || navigator.userLanguage )

    return lang && lang.split('-')[0]
}

// return the current navigable
const parseUrl = () =>
    ({
        path        : location.pathname.split('/').filter( x => x ),
        param       : querystring.parse( location.search ),
        language    : parseLanguage(),
    })

module.exports = store => {

    if ( typeof location == 'undefined' )
        return

    store.register( store.service.router.navigable , setUrl )

    setUrl( store.getValue( store.service.router.navigable ) )

    return {
        start : () => {

            // dispatch location change
            window.addEventListener('popstate', () =>
                store.dispatch({ type : 'navigator:read', payload: parseUrl() })
            )

            // read the current location
            store.dispatch({ type : 'navigator:read', payload: parseUrl() })
        }
    }
}
