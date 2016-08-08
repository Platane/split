import React, {PropTypes, Component} from 'react'

import Text         from 'component/text'
import User         from 'component/user'
import f            from 'component/abstract/format/amount'

import style from './style.css'

const Expense = ({ title, volume, currency }) => (
    <div className={ style.container } >

        <div className={ style.title } >
            <Text>{ title }</Text>
        </div>

        <div className={ style.volume } >
            <Text>{ f( currency, volume ) }</Text>
        </div>

    </div>
)


Expense.propTypes = {
    title       : PropTypes.string.isRequired,
    volume      : PropTypes.number.isRequired,
    currency    : PropTypes.string.isRequired,
    from        : PropTypes.shape( User.propTypes ),
    to          : PropTypes.array.isRequired,
    detail      : PropTypes.string,
}


export default Expense
