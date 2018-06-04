let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');

const PORT = 8000;

let pool = new pg.Pool({
    port:5432,
    database: 'future',
    password:'Jikop8982',
    max: 10,
    host: 'localhost',
    user: 'postgres'
});
pool.connect((err,db,done) =>{
    if(err){
        return console.log(err);
    }
    else {
        db.query('SELECT * from classes', (err,table) =>{
            if(err){
                return console.log(err);
            }
            else{
                console.log(table);
            }
        })
    }
});

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use((req, res) => {
    res.status(404).send({ message: '404 Not Found' });
});

app.use(function(request, res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(PORT, () => console.log('Listening on port ' +PORT));