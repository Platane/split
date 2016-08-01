import {insert, collect}   from '../../service/storage/entity/user'

module.exports = ({ storage, http }) => {

    // add new user
    http.post('room/:room_id/user', ({ params, body }) =>

        insert( storage.datastore, body, +params.room_id )
            .then( user => ({ user }) )

    )
}
