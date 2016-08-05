require('file?name=index.html!index.html')
require('./style/main.css')

const jsFile = 'app.js'
const pathName = process.env.PATHNAME || '/'

const script = document.createElement('script')
script.setAttribute('src', pathName+jsFile )
document.body.appendChild( script )
