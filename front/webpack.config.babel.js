const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = {

    entry: {
        'app'       : [
            ...(
                process.env.NODE_ENV == 'production'
                    ? []
                    : ['./web_modules/loader.devTool.js']
            ),
            './web_modules/index.js',
        ],

        'loader'    : './web_modules/loader.js',
    },

    output: {
        path        : path.join(__dirname, 'dist'),
        filename    : process.env.NODE_ENV == 'production'
            ? '[name]-[hash:8].js'
            : '[name].js'
    },

    module: {

        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
            },

            {
                test: /\.html?$/,
                exclude: /node_modules/,
                loader: 'html-minify',
            },

            {
                test: /\.css$/,
                loader: 'style!css?modules&importLoaders=1&localIdentName=[hash:base64:6]!postcss',
            }

            {
                test: /\.json$/,
                loader: 'file?name='+(process.env.PATHNAME||'/')+'[hash:8].[ext]',
            },

            {
                test: /\.(eot|ttf|woff|woff2|svg|gif|jpg|png)$/,
                loader: 'file?name='+(process.env.PATHNAME||'/')+'[hash:8].[ext]',
            },

        ],

        resolve : {
            modulesDirectories : ['node_modules', 'web_modules'],
        },

        postcss: () =>
            [autoprefixer]
        ,
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV        : 'NODE_ENV'        in process.env ? `'${ process.env.NODE_ENV          }'` : `null`,
                API_HOST        : 'API_HOST'        in process.env ? `'${ process.env.API_HOST          }'` : `null`,
            },
        }),


        ...(

            process.env.NODE_ENV != 'production'
                ? []
                : [

                    // write stat
                    function(){
                        this.plugin("done", stats =>
                            fs.writeFileSync(
                                path.join(__dirname, "webpack-stats.json"),
                                JSON.stringify(stats.toJson())
                            )
                        )
                    },

                    new webpack.optimize.UglifyJsPlugin({ compress: {warnings: false} })
                    ,

                ]

        )
    ],
}