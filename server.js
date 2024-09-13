const express = require('express');
const app = express();
const indexRouter = require('./routes')
const userRouter = require('./routes/user')
const cors = require('cors');
const session = require('express-session')
const fileStorage = require('session-file-store')(session)

app.set('port', process.env.PORT || 3001 );



app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
    

app.use(session({
    httpOnly : true,
    resave: false,
    secret : 'secret',
    store : new fileStorage()
}))

app.use('/', indexRouter);
app.use('/user', userRouter);


app.listen(app.get('port'), ()=>{
    console.log('Waiting....')
});

