import Room             from './room'
import {connect}        from 'component/abstract/connect'

export default connect(

    ({ room, expense, user }) => [ room.id, room.name, expense.list, user.list ]
    ,

    ( id, name, expense, user ) => ({ ready: !!id, name, expense, user })
    ,

    {
        setRoom : ( dispatch, getValue, props, id ) =>
            dispatch({ type:'room:set', payload:{ id } })
        ,
    },

    Room
)
