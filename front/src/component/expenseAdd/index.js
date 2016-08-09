import ExpenseAddState  from './state'
import {connect}        from 'component/abstract/connect'

export default connect(

    () => [  ]
    ,

    () => ({
        suggestedCurrency : [
            'EUR',
            'USD'
        ]
    })
    ,

    {
        save : ( dispatch, getValue, props, expense ) =>
            dispatch({ type:'expense:add', payload:{ expense } })
        ,
    },

    ExpenseAddState
)
