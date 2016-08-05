import * as c from '../common'


export const format = element =>
    element

export const insert = ( ds, element, roomId ) =>
    c.insert( ds, ds.key([ 'Room', roomId, 'Expense' ]), element )


export const collect = {

}
