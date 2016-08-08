
import {request as room} from 'fragment/room/meta'

const required = ( ...args ) =>
    [].concat( ...args.slice( 0, required.dependencies.length ) )

required.dependencies = [ room ]


const started = ( action, list ) =>
    ({ ...list, [action.meta.key]:true })

started.initValue = {}
started.actions = [ 'start-request' ]


const toStart = ( required, started ) =>
    required
        .filter( req => !started[ req.meta.key ] )

toStart.dependencies = [ required, started ]


module.exports = { required, started, toStart }
