const targetId = ( action ) =>
    action.payload.id

targetId.actions = [ 'room:set' ]


const id = ( action ) =>
    action.payload.id

id.actions = [ 'success-room:set' ]


const request = ( targetId, id ) =>
    targetId && targetId != id
        ? [{
            pathname    : `room/${ targetId }`,
            meta        : { key: Math.random()+'' },
        }]
        : []

request.dependencies = [ targetId, id ]

module.exports = { targetId, id, request }
