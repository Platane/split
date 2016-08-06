import * as config      from 'config'
import init             from 'init'

import fragment         from 'fragment'

init(
    fragment,
    {
        'http'              : require('service/http')( config.http ),
        'ui'                : require('service/ui')( config.ui ),
    }
)
