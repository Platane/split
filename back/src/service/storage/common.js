
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

                data.id = key

                resolve( data )
            }
        )
    )
