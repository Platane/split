import {del, post}  from './request'

export const room = () => {

    beforeEach( function( ){

        return post({ pathname: 'room', data: { name: 'btz' } })

            .then( res => this.room = res.room )
    })

    afterEach( function( ){

        // return del({ pathname: `room/${ this.room.id }/user` }).catch( () => 0 )

    })
}

export const user = ( n = 5 ) => {

    beforeEach( function( ){

        return Promise.all(
            Array.from({ length: n })
                .map( (_,i) =>
                    post({ pathname: `room/${ this.room.id }/user`, data: { name: `user-${ i+1 }` } })
                )
        )
            .then( x => this.users = x.map( x => x.user ) )
    })

    afterEach( function( ){

        // return Promise.all(
        //     this.users.map( x => del({ pathname: `room/${ this.room.id }/user/${ x.id }` }).catch( () => 0 ) )
        // )

    })
}

const rand = ( a = 1, b = 2, c= 7 ) =>
      a * a * 17
    + b * c * c * 31
    + b * b * a * 13
    + a * c * c * 23
    + b * c * a * a * 19

export const generateExpense = ( users, k = 17 ) =>
    ({
        title     : `cake ${k}`,
        currency  : 'eur',
        date      : Date.now(),
        from      : users[ rand( k ) % users.length ],
        detail    : 'this is a cake',
        to        :
            [
                users[ rand( 3, 5, k ) % users.length ]
                ,

                users
                    .filter( (_,i) => rand( i, 5, k ) % 2 )
            ]
                .reduce( (o,id,i) => ({ ...o, [id] : rand( k, i ) % ( 1 << 30 ) }), {} )
    })

export const expense = ( n = 5 ) => {

    beforeEach( function( ){

        return Promise.all(
            Array.from({ length: n })
                .map( (_,i) =>
                    post({ pathname: `room/${ this.room.id }/expense`, data: generateExpense( this.users.map( x => x.id ), i ) })
                )
        )
            .then( x => this.expense = x )
    })

    afterEach( function( ){

        // return Promise.all(
        //     this.expense.map( x => del({ pathname: `room/${ this.room.id }/expense/${ x.id }` }).catch( () => 0 ) )
        // )

    })
}
