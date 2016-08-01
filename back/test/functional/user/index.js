import {get, post}  from '../../utils/request'
import expect       from 'expect'

describe('user', function(){

    beforeEach( function( done ){

        post({ pathname: 'room', data: { name: 'frank' } })

            .then( res => {
                this.roomId = res.room.id
                done()
            })
    })

    it('should add an user', function( done ){

        post({ pathname: `room/${ this.roomId }/user`, data: { name: 'frank' } })

            .then( res => {

                expect( res.user )
                    .toContain({ name: 'frank' })
                    .toContainKey( 'id' )

                done()
            })
            .catch( done )
    })

    it('should have the user in the room ( in the room route )', function( done ){

        post({ pathname: `room/${ this.roomId }/user`, data: { name: 'frank' } })

            .then( () => get({ pathname: `room/${ this.roomId }` }) )

            .then( res => {

                expect( res.room ).toContainKey( 'users' )
                expect( res.room.users.length ).toBe( 1 )

                expect( res.room.users[ 0 ] )
                    .toContain({ name: 'frank' })
                    .toContainKey('id')

                done()
            })
            .catch( done )
    })
})
