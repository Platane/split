import React, {PropTypes, Component} from 'react'

import style from './style.css'

const Button = ({ onClick, label }) => (
    <div className={ style.container } onClick={ onClick } >{ label }</div>
)


Button.propTypes = {
    onClick    : PropTypes.func,
}


export default Button
