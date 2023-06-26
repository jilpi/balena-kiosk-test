const { join } = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const app = express()
const PORT = 80

/*app.use(favicon(join(__dirname, '..', 'views', 'public', 'favicon.ico')))
app.set('views', join(__dirname, '..', 'views', 'public'))
app.set('view engine', 'html')

// Enable the public directory for resource files
app.use('/public', express.static(
  join(__dirname, '..', 'views', 'public')
))

// reply to request with the hello world html file
app.get('/', function (req, res) {
  res.sendFile(join(__dirname, '..', 'views', 'index.html'))
})
*/

app.use(favicon(join(__dirname, '..', 'react-ekami-kiosk-app', 'favicon.ico')))
app.set('views', join(__dirname, '..', 'react-ekami-kiosk-app', 'static'))
app.set('view engine', 'html')


// Serve Static files located at the root of the project
app.use('/', express.static(
  join(__dirname, '..', 'react-ekami-kiosk-app' )
));

// Enable the public directory for resource files
app.use('/static', express.static(
  join(__dirname, '..', 'react-ekami-kiosk-app', 'static')
))

// reply to request with the hello world html file
app.get('/', function (req, res) {
  res.sendFile(join(__dirname, '..', 'react-ekami-kiosk-app', 'index.html'))
})





// start a server on port 80 and log its start to our console
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
