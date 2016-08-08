import {id}     from './info'

const targetId = ( action ) =>
    action.payload.id

targetId.actions = [ 'room:set' ]


const request = ( targetId, id ) =>
    targetId && targetId != id
        ? [{
            pathname    : `room/${ targetId }`,
            meta        : { key: Math.random()+'' },
            resType     : 'success-room:set'
        }]
        : []

request.dependencies = [ targetId, id ]

module.exports = { targetId, request }
