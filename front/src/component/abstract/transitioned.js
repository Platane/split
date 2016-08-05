import React, {PropTypes, Component} from 'react'

class Transitioned extends Component {

    constructor(){
        super()

        this.state = {transition:false}
        this.cancel = null

        this.fadeOff = () => {
            clearTimeout( this.cancel )

            if( this.state.indirectNext ) {
                this.setState({ previous: null, next:this.state.indirectNext, indirectNext:null })

                clearTimeout( this.cancel )
                this.cancel = setTimeout( this.fadeOff, this.props.delay || 5000 )

            } else
                this.setState({ previous: null, transition:false, indirectNext:null, transitionIndirect:false })

        }

    }

    componentDidMount(){
        const next = this.props.toTransition

        if ( this.props.noInitAnim )

            this.setState({ next })

        else if ( next ) {

            this.setState({ next, transition:true })

            clearTimeout( this.cancel )
            this.cancel = setTimeout( this.fadeOff, this.props.delay || 5000 )

        }
    }

    componentWillReceiveProps(nextProps) {

        const next      = nextProps.toTransition
        const previous  = this.props.toTransition

        if ( this.state.next == next || ( nextProps.equal && this.state.next && next && nextProps.equal( this.state.next, next ) ) )
            return

        this.setState(
            !previous || !nextProps.indirect
                ? { next, previous, transition:true, transitionIndirect:false, indirectNext:null }
                : { next:null, previous, indirectNext:next, transition:true, transitionIndirect:!!next }
            )

        if ( next != previous || previous ) {
            clearTimeout( this.cancel )
            this.cancel = setTimeout( this.fadeOff, nextProps.delay || 5000 )
        }
    }

    componentWillUnmount(){
        clearTimeout( this.cancel )
    }

    render(){
        const renderedChildren = this.props.children( this.state )
        return renderedChildren && React.Children.only(renderedChildren)
    }
}

Transitioned.propTypes = {
    equal           : PropTypes.func,
    delay           : PropTypes.number,
    indirect        : PropTypes.bool,
    noInitAnim      : PropTypes.bool,
}

export default Transitioned
