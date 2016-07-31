import {get, post}  from '../../utils/request'
import expect       from 'expect'

describe('room', function(){

    it('should save a room', function( done ){

        post({ pathname: 'room', data: { name: 'frank' } })
            .then( res => {

                expect( res.room )
                    .toContain({ name: 'frank' })
                    .toContainKey( 'id' )

                done()
            })
            .catch( done )
    })

    xit('should get the saved roon', function( done ){

    })
})
