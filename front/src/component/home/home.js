import React, {PropTypes, Component} from 'react'

import style from './style.css'

const Home = ({ setRoom }) => {

    const onKeyDown = event =>
        event.which == 13 && setRoom( event.target.value )

    return (
        <div className={ style.container } >

            <input className={ style.input } defaultValue="4785227343855616" onKeyDown={ onKeyDown } />

        </div>
    )
}

Home.propTypes = {
    setRoom : PropTypes.func.isRequired,
}


export default Home
