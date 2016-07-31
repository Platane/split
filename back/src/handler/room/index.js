import {insert}   from '../../service/storage/entity/room'

module.exports = ({ storage, http }) => {

    http.post('room/:room_id', ({ params, body }) => {


    })

    http.post('room', ({ params, body }) =>

        insert( storage.datastore, body )
            .then( room => ({ room }) )

    )
}
