import React, {PropTypes, Component} from 'react'

import Text             from 'component/text'
import ExpenseList      from 'component/expenseList'

import style from './style.css'

const Room = ({ name }) => (
    <div className={ style.container } >

        <Text>{ name }</Text>

        <ExpenseList/>

    </div>
)


Room.propTypes = {
    panel   : PropTypes.oneOf([ '' ]).isRequired,

    name    : PropTypes.string,

    ready   : PropTypes.bool.isRequired,
}


export default Room
