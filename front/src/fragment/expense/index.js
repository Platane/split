import {by_id as user_by_id}  from 'fragment/user'


const list = action =>
    action.payload.room.expenses
        .sort( (a,b) => a.date < b.date ? 1 : -1 )
        .map( x => {

            const volume = Object.keys( x.to )
                .reduce( (s,id) => s + ( + x.to[ id ] ), 0 )

            return {
                ...x,
                volume  : volume / 1000,
                to      : Object.keys( x.to )
                    .map( id =>
                        ({
                            user    : id,
                            amount  : ( + x.to[ id ] ) / 1000,
                            percent : ( ( + x.to[ id ] ) / volume ) * 100,
                        })
                    )
            }

        })

list.actions = [ 'success-room:set' ]
list.initValue = []

const by_id = ( list ) => {
    const o = {}
    list.forEach( x => o[ x.id ] = x )
    return o
}
by_id.dependencies = [ list ]


const list_with_user = ( list, user_by_id ) =>
    list.map( x =>
        ({

            ...x,
            from : user_by_id[ x.from ],
            to   : x.to
                .map( x =>
                    ({
                        ...x,
                        user    : user_by_id[ x.user ],
                    })
                )
        })
    )
list_with_user.dependencies = [ list, user_by_id ]



module.exports = { list, by_id, list_with_user }
