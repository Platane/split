import React, {PropTypes, Component} from 'react'

const cancel = ( x ) => {
    cancelAnimationFrame( x )
    clearTimeout( x )
}

const loop = ( fn, delay ) =>
    !delay || delay < 20
        ? requestAnimationFrame( fn )
        : setTimeout( fn, delay )


class Animated extends Component {

    constructor(){
        super()

        this.state = {}
        this.cancel = null
        this.anim = null

        this.loop = ( ) => {

            const s = ( this.anim && this.anim() ) || ( this.props.anim && this.props.anim() )

            cancel( this.cancel )

            if ( s )
                this.setState( s )

            if ( !s || s.static )
                return

            this.cancel = loop( this.loop, this.props.delay )
        }

    }

    componentDidMount(){
        this.loop()
    }

    componentWillReceiveProps(nextProps) {
        this.anim = nextProps.anim
        this.loop()
    }

    componentWillUnmount(){
        cancel( this.cancel )
    }

    render(){
        const renderedChildren = this.props.children( this.state )
        return renderedChildren && React.Children.only(renderedChildren)
    }
}

Animated.propTypes = {
    anim    : PropTypes.func.isRequired,
    delay   : PropTypes.number,
}

export default Animated
