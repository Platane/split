import {get, post}      from '../../utils/request'
import * as bootstrap   from '../../utils/bootstrap'
import expect           from 'expect'

describe('room', function(){

    describe('add a room', function(){

        it('should return the room', function( ){

            return post({ pathname: 'room', data: { name: 'frank' } })
                .then( res =>

                    expect( res.room )
                        .toContain({ name: 'frank' })
                        .toContainKey( 'id' )

                )
        })
    })

    describe('get a room', function(){

        bootstrap.room()

        it('should return the room', function( ){

            return get({ pathname: `room/${ this.room.id }` })
                .then( res =>

                    expect( res.room )
                        .toContainKeys([ 'name', 'id' ])

                )
        })
    })
})
