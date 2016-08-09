import React, {PropTypes, Component} from 'react'

import style from './style.css'

const InputAmount = ({ onChange }) => (
    <div className={ style.container } >

        <input type="text" className={ style.input } onChange={ amount => onChange && onChange({ amount }) } />

    </div>
)


InputAmount.propTypes = {
    value               : PropTypes.shape({
        amount            : PropTypes.number,
        currency          : PropTypes.string,
    }),
    onChange            : PropTypes.func,
    suggestedCurrency   : PropTypes.arrayOf( PropTypes.string ).isRequired,
}


export default InputAmount
