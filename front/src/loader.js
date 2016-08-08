require('file?name=index.html!./index.html')

const app = document.createElement('script')
app.setAttribute('src', 'app.js' )
document.body.appendChild( app )
