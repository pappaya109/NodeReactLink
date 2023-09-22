const express = require('express')
const app = express();

const indexRouter = require('./routes')

app.set('port', process.env.PORT || 3001 );







app.use('/', indexRouter)

app.listen(app.get('port'), ()=>{
    console.log('Waiting....')
})