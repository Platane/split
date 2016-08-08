import React, {Component, PropTypes}   from 'react'

import style from './style.css'

const Text = ({ children }) =>
    <div className={ style.text }>{ children }</div>

export default Text
