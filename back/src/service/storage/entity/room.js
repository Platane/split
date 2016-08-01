import * as c from '../common'


export const insert = ( ds, element ) =>
    c.insert( ds, ds.key('Room'), element )


export const collect = {

    by_id : ( ds, id ) => {

        let room
        let users

        return Promise.all([

            c.get( ds, 'Room', id )
                .then( x => room = x )
                
            ,

            c.getChildren( ds, 'Room', id, 'User' )
                .then( x => users = x )

        ])
            .then(() => ({ ...room, users }) )
    }
}
