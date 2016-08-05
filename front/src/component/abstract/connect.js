import React, {PropTypes, Component} from 'react'
import root from 'fragment'

export const connect = ( getDependencies, getState, methods, C ) => {

    if ( getDependencies( root ).some( x => !x ) ){
        console.warn(`trying to listen to undefined fragment ( in connect with componant ${C.name} )`, getDependencies( root ) )
        throw `trying to listen to undefined fragment ( in connect with componant ${C.name} )`
    }

    class Connect extends Component {

        static contextTypes = {
            dispatch       : PropTypes.func.isRequired,
            register       : PropTypes.func.isRequired,
            unregister     : PropTypes.func.isRequired,
            getValue       : PropTypes.func.isRequired,
        };

        constructor( ){
            super()

            this.state = {}
            this._methods = {}

            this._update = ( ...args ) =>
                this.setState( getState( ...args, this.props ) )
        }

        shouldComponentUpdate(nextProps, nextState) {

            if ( !this._renderedOnce )
                return true

            for ( let key in nextProps )
                if ( this.props[ key ] != nextProps[ key ] )
                    return true

            for ( let key in nextState )
                if ( !( key in this.state ) || this.state[ key ] != nextState[ key ] )
                    return true

            return false
        }

        componentDidMount() {

            this._mounted=true
            this._renderedOnce=false

            const dep = getDependencies( root )

            this.context.register( ...dep, this._update )

            this._methods = {}
            for ( let key in methods )
                this._methods[ key ] = ( ...args ) => methods[ key ]( this.context.dispatch, this.context.getValue, {...this.props, ...this.state}, ...args )


            this._update( ...dep.map( fragment => this.context.getValue( fragment ) ) )
        }

        componentWillUnmount() {
            this._mounted=false
            this.context.unregister( this._update )
        }

        render(){
            if ( !this._mounted )
                return null
            this._renderedOnce = true
            return <C {...{ ...this.props, ...this.state, ...this._methods }} />
        }
    }

    return Connect
}
