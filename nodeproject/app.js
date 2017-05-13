var express = require('express');
var app = express();

var eventRouter = require("./src/routes/eventRoutes");
var dbRouter = require("./src/routes/dbRoutes");

var port = process.env.PORT;


app.use(express.static('public'));
app.use(express.static('bower_components'));
// app.use(express.static('src/views'));

app.set('views', './src/views');
app.set('view engine', 'ejs');


    
app.use('/Events', eventRouter);
app.use('/Db', dbRouter);



app.get('/', function(req, res){
    res.render('index', {
        
        nav : [ {link: 'services',  text: 'Services'},
                {link: 'portfolio', text: 'Portfolio'},
                {link: 'about',     text: 'About'},
                {link: 'team',      text: 'Team'},
                {link: 'contact',   text: 'Contact'}
                ]
        
    });
});

// app.get('/routing', function(req, res){
//     res.send('This IS Farhan Route');
// });

app.listen(port, function(err){
    
    if(err)
    {
        console.log('The Server is getting an error '+ err);
    }
    else
        console.log('The Server is running on Port ' + port);
});