
const symbols = {
    'USD' : '$',
    'EUR' : '€',
    'GBP' : '£',
    'THB' : '฿',
}

const formatNumber = x => {

    const u = 0 | (+x)
    let v = x.toString().indexOf('.') == -1
        ? '0'
        : x.toString().split('.')[ 1 ]

    while( v.length < 2 )
        v += '0'

    return `${ u }.${ v }`
}

const fallback = ( currency, volume ) =>
    `${ formatNumber( volume ) } ${ symbols[ currency.toUpperCase() ] || '' }`



module.exports = 'undefined' == typeof navigator || 'undefined' == typeof Intl
        ? ( currency, volume ) => fallback( currency, volume )
        : ( currency, volume ) =>
            new Intl.NumberFormat(navigator.language, { style: 'currency', currency: currency.toUpperCase() }).format( volume )
