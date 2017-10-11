const express = require('express');
const app = express();
const ejs = require('ejs');
const session = require('express-session')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.use(session({
	secret: 'berhasil',
	resave: false,
	saveUninitialized: true
}))
app.set('view engine','ejs')

const index = require('./routes/index')
const rekap = require('./routes/rekap')
// const subject = require('./routes/subject')
// const teacher = require('./routes/teacher')
// const student = require('./routes/student')
const login = require('./routes/login')

app.use('/', index)
app.use('/', rekap)
app.use('/', login)

// app.use('/teacher', teacher)

// app.use('/subject', subject)

// app.use('/student', student)

app.get('/', function (req, res) {
  res.redirect('/login')
})

app.listen(process.env.PORT || '3000', function() {
  //console.log('sini guuys');
});
