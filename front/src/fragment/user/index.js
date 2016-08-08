
const list = action =>
    action.payload.room.users

list.actions = [ 'success-room:set' ]
list.initValue = []

const by_id = ( list ) => {
    const o = {}
    list.forEach( x => o[ x.id ] = x )
    return o
}
by_id.dependencies = [ list ]

module.exports = { list, by_id }
