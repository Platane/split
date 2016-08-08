
import { targetId as roomId } from 'fragment/room/meta'

const path = ( roomId ) =>
    roomId
        ? [ 'room', roomId ]
        : [ 'home' ]

path.dependencies = [ roomId ]


const navigable = ( path ) =>
    ({ path })

navigable.dependencies = [ path ]

module.exports = { path, navigable }
