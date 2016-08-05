import {request as httpsRequest}    from 'https'
import {request as httpRequest}     from 'http'
import * as url                     from 'url'



export const request = options =>

    new Promise( (resolve, reject) => {

        // default options
        options = {
            protocol    : 'http:',
            host        : 'localhost',
            port        : 9011,
            ...options,
        }

        options.path = url.parse( url.format(options) ).path

        // req object creation
        const req = ( options.protocol == 'https:' ? httpsRequest : httpRequest )

            ( options, res => {

                if ( res.statusCode != 200 )
                    return reject( 'request fails with '+res.statusCode+' status code ('+url.format(options)+' ) ' )

                let s=''

                res.setEncoding('utf8')
                res.on('data', chunk => s+=chunk )
                res.on('end', () => {

                    resolve( JSON.parse(s) )

                    resolve = reject = () => 0
                })

            })

        req.on('error', err => {

                reject( err )

                resolve = reject = () => 0

            })

        if ( options.data )
            req.write( JSON.stringify( options.data ) )

        req.end()
    })


export const get = options =>
    request({ ...options, method:'GET' })

export const post = options =>
    request({ ...options, method:'POST' })

export const del = options =>
    request({ ...options, method:'DEL' })
