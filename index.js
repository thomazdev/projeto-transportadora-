const express = require('express');
const session = require('express-session')
const flash = require('express-flash');
const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
const conection = require('./database/database');

const AssessmentModel = require('./models/Assessments');

const app = express();
const port = 2000;

//BODY PARSER
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//VIEW ENGINE
app.set('view engine','ejs');
app.use(express.static('public'));

// CONTROLLERS
const dashbordController = require('./controllers/dashbordController');
const assessmentsControlers = require('./controllers/assessmentControllers');

// CONNECTION DATABASE

conection.authenticate().then( () =>{
    console.log('conectado ao banco de dados..');
}).catch( (error) =>{
    console.log('erro ao conectar banco de dados');
    console.log(error);
});

//SESSION
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(flash());

app.use(cookieParser("343654674756487"));

app.get('/', (reg,res) =>{
    res.render('login');
});

// ROUTER DASHBORD
app.use('/', dashbordController);
app.use('/', assessmentsControlers);

app.listen(port, (e) =>{
    console.log('conectando ao servidor...');
    console.log('http://localhost:'+port);
});   