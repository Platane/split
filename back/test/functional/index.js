
import createServer     from '../../src'
import defaultConfig    from '../../src/config'

describe('functionnal', function(){

    beforeEach(function( done ){

        createServer({ ...defaultConfig })
            .then( services => {

                this.services = services

                done()
            })

    })

    afterEach(function( done ){

        this.services.destroy()
            .then( services => done() )

    })

    require('./room')

})
