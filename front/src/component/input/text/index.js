import React, {PropTypes, Component} from 'react'

import style from './style.css'

const InputText = props => (
    <div className={ style.container } >

        <input type="text" className={ style.input } { ...props } onChange={ props.onChange && ( e => props.onChange( e.target.value ) ) } />

    </div>
)


InputText.propTypes = {
    onChange    : PropTypes.func,
}


export default InputText
