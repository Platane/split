import App              from './app'
import {connect}        from 'component/abstract/connect'

export default connect(

    ({ service }) => [ service.router.path ]
    ,

    ( path ) => ({ path })
    ,

    {
        setRoom : ( dispatch, getValue, props, id ) =>
            dispatch({ type:'room:set', payload:{ id } })
        ,
    },

    App
)
