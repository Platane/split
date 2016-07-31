
import initServices     from './service'
import initHandler      from './handler'

const init = (config={}) =>

    initServices( config )

        .then( services =>

            initHandler( services )

                .then( () => services )

        )

        .catch( err => {

            console.log( err.stack )

            process.exit(1)
        })


module.exports = init
