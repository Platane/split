import React, {Component, PropTypes}   from 'react'

import style from './style.css'

const User = ({ name, pic }) =>
    <div>{ name }</div>

User.propTypes = {
    name        : PropTypes.string.isRequired,
    pic         : PropTypes.string,
}

export default User
