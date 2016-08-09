import React, {PropTypes, Component} from 'react'

import { translate }    from 'component/abstract/transform'
import Slidable         from 'component/abstract/slidable'

import style from './style.css'

const initBreakPoints = ( now ) => [
    {
        x       : 0.0,
        date    : now,
        label   : 'now',
    },
    {
        x       : 0.10,
        date    : now - 3600,
        label   : 'yesterday',
    },
    {
        x       : 0.50,
        date    : now - 24 * 3600,
        label   : 'monday',
    },
    {
        x       : 0.80,
        date    : now - 30 * 24 * 3600,
    },
]


const breakPoints = initBreakPoints( Date.now() )

const fromDate = date =>
    date

const toDate = x =>
    x


const InputDate = ({ value, onChange }) => (

    <div className={ style.container } >

        <Slidable moveFn={ ({ kx }) => onChange && onChange( toDate( 1-kx ) ) }>

            <div className={ style.lineWrapper }>
                <div className={ style.line }>

                    { breakPoints.map( ({ x, date, label }) =>
                        <div key={ x } className={ style.breakPoint } style={{ left:`calc( ${ 100 - x * 100 }% - 3px )` }}/>
                    )}

                    <div className={ style.carret } style={{ left: `calc( ${ 100 - fromDate( value ) * 100 }% - 8px )` }}/>

                </div>
            </div>

        </Slidable>

    </div>
)


InputDate.propTypes = {
    onChange    : PropTypes.func,
    value       : PropTypes.number.isRequired,
}


export default InputDate
