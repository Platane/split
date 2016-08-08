import React, {PropTypes, Component} from 'react'

import Text         from 'component/text'
import Expense      from './expense'

import style from './style.css'

const ExpenseList = ({ list }) => (
    <div className={ style.container } >

        <div className={ style.label } >
            <Text>Expenses :</Text>
        </div>

        <div className={ style.list } >
            { list.map( x => <Expense key={ x.id } { ...x } /> ) }
        </div>

    </div>
)


ExpenseList.propTypes = {
    list    : PropTypes.array.isRequired,
}


export default ExpenseList
