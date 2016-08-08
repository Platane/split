import ExpenseList      from './expenseList'
import {connect}        from 'component/abstract/connect'

export default connect(

    ({ expense }) => [ expense.list_with_user ]
    ,

    ( list ) => ({ list })
    ,

    {},

    ExpenseList
)
