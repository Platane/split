import React, {PropTypes, Component} from 'react'

import Home  from 'component/home'
import Room  from 'component/room'

import style from './style.css'

const App = ({ path }) =>
(
    <div className={ style.container } >

        { path[0] == 'home' &&
            <Home />
        }

        { path[0] == 'room' &&
            <Room panel={ path[2] || '' } />
        }

    </div>
)

export default App
