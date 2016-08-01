
export const insert = ( ds, key, data ) =>
    new Promise( (resolve, reject) =>
        ds.save(
            {
                key,
                data
            },
            ( err, res ) => {

                if ( err )
                    return reject( err )

                data.id = key.id

                resolve( data )
            }
        )
    )



const keyToId = ({ data, key }) =>
    ({
        ...data,
        id : key.id,
    })

export const get = ( ds, ...path ) =>
    new Promise( (resolve, reject) =>
        ds.get(
            ds.key( path ),
            ( err, entity ) =>
                err
                    ? reject( err )
                    : resolve( entity && keyToId( entity ) )
        )
    )

export const getChildren = ( ds, ...path ) =>
    new Promise( (resolve, reject) =>

        ds
            .createQuery( path[ path.length -1 ] )

            .hasAncestor( ds.key( path.slice( 0, -1 ) ) )

            .run( ( err, entities, info ) =>

                err
                    ? reject( err )
                    : resolve( entities.map( keyToId ) )
            )
    )
