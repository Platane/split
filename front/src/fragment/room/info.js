const name = ( action ) =>
    action.payload.room.name

name.actions = [ 'success-room:set' ]


const id = ( action ) =>
    action.payload.room.id

id.actions = [ 'success-room:set' ]


module.exports = {
    name,
    id,
}
