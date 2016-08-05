import * as config      from 'config'
import init             from 'init'

import fragment         from 'fragment'

init(
    fragment,
    {
        'comm'              : require('system/comm')( config.comm ),
        'ui'                : require('system/ui')( config.ui ),
    }
)
