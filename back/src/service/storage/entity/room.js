import * as c from '../common'


export const insert = ( ds, element ) =>
    c.insert( ds, ds.key('Room'), element )


export const collect = {

    by_ids : ( ds, ids ) =>
        Promise.resolve()
    ,
}
