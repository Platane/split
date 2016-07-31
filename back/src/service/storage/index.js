import gcloud           from 'gcloud'

import * as room    from './entity/room'

const entities = {
    room
}

const init = (config = {}) => {

    // pass credential
    const datastore = gcloud.datastore( config )

    return Promise.resolve({

        destroy     : () => Promise.resolve(),

        datastore,

        ...entities,
    })
}

module.exports = init
