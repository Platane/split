import React, {PropTypes, Component}    from 'react'
import InputText                        from 'component/input/text'
import InputAmount                      from './input/amount'
import InputDate                        from './input/date'

import style from './style.css'

const ExpenseForm = ({ expense, suggestedCurrency,  onChange }) => (
    <div className={ style.container } >

        <div className={ style.topRow }>

            <div className={ style.title }>
                <InputText
                    placeholder="title"
                    value={ expense && expense.title }
                    onChange={ title => onChange({ title }) }
                    />
            </div>


            <div className={ style.amount }>
                <InputAmount
                    value={ expense || {} }
                    suggestedCurrency={ suggestedCurrency }
                    onChange={ x => onChange( x ) }
                    />
            </div>

        </div>

        <div className={ style.date }>
            <InputDate
                value={ expense && expense.date }
                onChange={ date => onChange({ date }) }
                />
        </div>
    </div>
)

ExpenseForm.propTypes = {
    onChange                : PropTypes.func.isRequired,
    expense                 : PropTypes.object,
    suggestedCurrency       : PropTypes.array.isRequired,
}


export default ExpenseForm
