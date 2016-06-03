/*Define depemdencies*/
var express  = require('express'),
    app      = express();
    nodemailer = require("nodemailer"),
    path     = require('path'),
    bodyParser = require('body-parser'),
    http = require('http'),
    cors = require('cors'),
    expressValidator = require('express-validator');
//var MobileDetect = require('mobile-detect');



/*app use*/
app.use(express.static(path.join(__dirname, 'public')));

//app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cors()); //to allow origins


app.get('/', function (req, res) {
  
  res.send('Hello World, continuous deployments!');
});


/*MySql connection */
var connection  = require('express-myconnection'),
    pgsql = require('pg');

app.use(

    connection(pgsql,{
        host     : 'ec2-50-19-219-148.compute-1.amazonaws.com',
        user     : 'dowggepadcqdej',
        password : 'djS9n9yKoM1waUYRusvBbUF-Ay',
        port     : '5432',
        database : 'de9j2qm2r0rvlu',
        multipleStatements: true,
        debug    : false //set true if you wanna see debug logger
    },'request')

);
app.all('/*', function(req, res, next) {
//       var md = new MobileDetect(req.headers['user-agent']);
// console.log( md.os() );
// console.log( md.userAgent() );

  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
   next();
  }
});
/*var auth = require('./routes/auth');*/



/*
    Your middlewares or setups usually around here
*/
//app.all('/api/*',auth.login);
/*app.all('/api/*', [require('./middlewares/validateRequest')]);*/


app.use('/',require('./routes/indexR'));



//start Server
var server = app.listen(process.env.PORT || 7000,function(){

   console.log("Listening to port %s",server.address().port);
});
