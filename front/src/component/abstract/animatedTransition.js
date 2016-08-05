import React, {PropTypes, Component} from 'react'


const cancel = ( x ) => {
    cancelAnimationFrame( x )
    clearTimeout( x )
}

const loop = ( fn, delay ) =>
    !delay || delay < 20
        ? requestAnimationFrame( fn )
        : setTimeout( fn, delay )


class Transitioned extends Component {

    constructor(){
        super()

        this.state = {k:1}
        this.cancel = null

        this.loop = () => {

            cancel( this.cancel )

            const k = Math.min( 1, (Date.now() - this.state.startDate) / this.props.delay )

            const previous = k < 1
                ? this.state.previous
                : null

            this.setState({ k, previous })

            if ( previous )
                this.cancel = loop( this.loop, this.props.step )
        }

    }

    componentWillReceiveProps(nextProps) {

        const next      = nextProps.toTransition
        const previous  = this.props.toTransition

        if ( this.state.next == next )
            return

        this.setState({ next, previous, k: previous ? 0 : 1, startDate: Date.now() })

        if ( next != previous && previous ) {
            cancel( this.cancel )
            this.cancel = loop( this.loop, nextProps.step )
        }
    }

    componentWillUnmount(){
        cancel( this.cancel )
    }

    render(){
        const renderedChildren = this.props.children( this.state )
        return renderedChildren && React.Children.only(renderedChildren)
    }
}

Transitioned.propTypes = {
    delay           : PropTypes.number,
    indirect        : PropTypes.bool,
}

export default Transitioned
