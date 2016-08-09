import React, {PropTypes, Component} from 'react'

import Text             from 'component/text'
import Button           from 'component/input/button'
import ExpenseList      from 'component/expenseList'
import ExpenseAdd       from 'component/expenseAdd'

import style from './style.css'

const Room = ({ name, panel,   addExpense }) => (
    <div className={ style.container } >

        <Text>{ name }</Text>

        <ExpenseList/>

        <Button onClick={ addExpense } />

        { panel == 'addExpense' &&
            <ExpenseAdd />
        }

    </div>
)


Room.propTypes = {
    panel   : PropTypes.oneOf([ '', 'addExpense' ]).isRequired,

    name    : PropTypes.string,

    ready   : PropTypes.bool.isRequired,
}


export default Room
