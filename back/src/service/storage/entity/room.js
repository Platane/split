import * as c from '../common'


export const insert = ( ds, element ) =>
    c.insert( ds, ds.key('Room'), element )


export const collect = {

    by_id : ( ds, id ) =>
        console.log('yolo') ||
        new Promise( (resolve, reject) =>
            console.log( ds.key([ 'Room', id ]) ) ||
            ds.get( ds.key([ 'Room', id ]), (err, entity) => err ? reject( err ) : resolve( entity ) )
        )
    ,

    by_name : ( ds, pattern ) =>
        Promise.resolve()

    // by_name : ( ds, pattern ) =>
    //     new Promise( (resolve, reject) => {
    //
    //         const query = ds.createQuery('Room')
    //
    //         ds.get( ds.key([ 'Room', id ]), (err, entity) => err ? reject( err ) : resolve( entity ) )
    //     })
    // ,
}
