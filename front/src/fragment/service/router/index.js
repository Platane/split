
import { targetId as roomId } from 'fragment/room/meta'

const panel = action =>
    action.payload.value

panel.actions = [ 'app:panel:set' ]
panel.initValue = ''


const path = ( roomId, panel ) =>
    roomId
        ? [ 'room', roomId, panel ]
        : [ 'home', ]

path.dependencies = [ roomId, panel ]


const navigable = ( path ) =>
    ({ path })

navigable.dependencies = [ path ]

module.exports = { panel, path, navigable }
