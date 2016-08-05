
import createServer     from '../../src'
import defaultConfig    from '../../src/config'

describe('functionnal', function(){

    beforeEach(function( ){

        return createServer({ ...defaultConfig })
            .then( services => {

                this.services = services

            })

    })

    afterEach(function( ){

        return this.services.destroy()

    })


    require('./room')

    require('./user')

    require('./expense')


})
