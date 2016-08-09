import Room             from './room'
import {connect}        from 'component/abstract/connect'

export default connect(

    ({ room, expense, user }) => [ room.id, room.name, expense.list, user.list ]
    ,

    ( id, name, expense, user ) => ({ ready: !!id, name, expense, user })
    ,

    {
        addExpense : ( dispatch, getValue, props, id ) =>
            dispatch({ type:'app:panel:set', payload:{ value: 'addExpense' } })
        ,
    },

    Room
)
