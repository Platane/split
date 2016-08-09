import React, {PropTypes, Component}    from 'react'
import ExpenseForm                      from 'component/expenseForm'
import Button                           from 'component/input/button'

import style from './style.css'

const ExpenseAdd = props => (
    <div className={ style.container } >

        <div className={ style.form }>
            <ExpenseForm { ...props }/>
        </div>

        <div className={ style.footer }>
            <Button onClick={ () => props.save( props.expense ) } />
        </div>
    </div>
)

ExpenseAdd.propTypes = {

}


export default ExpenseAdd
