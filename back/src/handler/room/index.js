import {insert, collect}   from '../../service/storage/entity/room'

module.exports = ({ storage, http }) => {

    // get a room by id
    http.get('room/:room_id', ({ params }) =>

        collect.by_id( storage.datastore, params.room_id )
            .then( room => console.log( room ) || ({ room }) )

    )

    // get a room by name
    http.get('room', ({ params }) =>

        (
            params.name && collect.by_name( storage.datastore, params.name )
            ||
            Promise.resolve()
        )
            .then( room =>  ({ room }) )

    )



    // create a new room
    http.post('room', ({ params, body }) =>

        insert( storage.datastore, body )
            .then( room => ({ room }) )

    )
}
