import {get, post}      from '../../utils/request'
import * as bootstrap   from '../../utils/bootstrap'
import expect           from 'expect'

describe('user', function(){

    bootstrap.room()

    describe('add an user', function(){

        it('should return the user', function( ){

            const user= { name: 'frank' }

            return post({ pathname: `room/${ this.room.id }/user`, data: user })

            .then( res => {

                expect( res.user )
                    .toContain( user )
                    .toContainKey( 'id' )

            })
        })

        it('should have the user in the room ( with the room route )', function( ){

            const user= { name: 'frank' }

            return post({ pathname: `room/${ this.room.id }/user`, data: user })

                .then( () => get({ pathname: `room/${ this.room.id }` }) )

                .then( res => {

                    expect( res.room ).toContainKey( 'users' )
                    expect( res.room.users.length ).toBe( 1 )

                    expect( res.room.users[ 0 ] )
                        .toContain( user )
                        .toContainKey( 'id' )

                })
        })
    })
})
