import * as c from '../common'


export const insert = ( ds, element, roomId ) =>
    c.insert( ds, ds.key([ 'Room', roomId, 'User' ]), element )


export const collect = {

}
