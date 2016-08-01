import {get, post}  from '../../utils/request'
import expect       from 'expect'

describe('room', function(){

    it('should save a room', function( done ){

        post({ pathname: 'room', data: { name: 'frank' } })
            .then( res => {

                this.roomId = res.room.id

                expect( res.room )
                    .toContain({ name: 'frank' })
                    .toContainKey( 'id' )

                done()
            })
            .catch( done )
    })

    it('should get the saved room', function( done ){

        get({ pathname: `room/${ this.roomId }` })
            .then( res => {

                expect( res.room )
                    .toContain({ name   : 'frank' })
                    .toContain({ id     : this.roomId })

                done()
            })
            .catch( done )
    })
})
