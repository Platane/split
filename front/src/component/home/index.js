import Home             from './home'
import {connect}        from 'component/abstract/connect'

export default connect(

    () => [  ]
    ,

    () => ({ })
    ,

    {
        setRoom : ( dispatch, getValue, props, id ) =>
            dispatch({ type:'room:set', payload:{ id } })
        ,
    },

    Home
)
