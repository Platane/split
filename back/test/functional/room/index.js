import {get, post}  from '../../utils/request'
import expect       from 'expect'

describe('room', function(){

    it('should save a room', function( ){

        return post({ pathname: 'room', data: { name: 'frank' } })
            .then( res => {

                this.roomId = res.room.id

                expect( res.room )
                    .toContain({ name: 'frank' })
                    .toContainKey( 'id' )

            })
    })

    it('should get the saved room', function( ){

        return get({ pathname: `room/${ this.roomId }` })
            .then( res => {

                expect( res.room )
                    .toContain({ name   : 'frank' })
                    .toContain({ id     : this.roomId })

            })
    })
})
