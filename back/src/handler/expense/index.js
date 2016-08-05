import {insert, collect}   from '../../service/storage/entity/expense'

module.exports = ({ storage, http }) => {

    // add new user
    http.post('room/:room_id/expense', ({ params, body }) =>

        insert( storage.datastore, body, +params.room_id )
            .then( expense => ({ expense }) )

    )
}
