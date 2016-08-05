const fs = require('fs')

var files     = require('../webpack-stats.json').assetsByChunkName

var index     = fs.readFileSync('./dist/index.html').toString()
var script    = fs.readFileSync('./dist/'+ files.loader).toString()

if ( !index.match( /<script.+loader\.js.+<\/script>/ ) )
    throw 'loader script not found'

if ( files.app )
    script = script.replace( /app\.js/ , files.app )

index = index.replace( /<script.+loader\.js.+<\/script>/, '<script>'+script+'</script>')

fs.writeFileSync( './dist/index.html', index )
