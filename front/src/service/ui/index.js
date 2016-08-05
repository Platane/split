import ReactDOM         from 'react-dom'
import React            from 'react'

import App              from 'component/app'
import DevTool          from 'refinery-tools'
import Contextify       from 'component/abstract/contextify'

module.exports = ( options = {} ) =>
    ( store ) => {

        if ( !document )
            return

        ReactDOM.render( <Contextify { ...store }><App /></Contextify>, document.getElementById('app') )


        if ( options.devTool ) {

            document.body.setAttribute('class', 'debug')

            ReactDOM.render( <DevTool { ...store } />, document.getElementById('devTool') )
        }
    }
