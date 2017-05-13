var express = require('express');
var eventRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

eventRouter.route('/')
    .get(function(req, res){
        
        var url = "mongodb://localhost:27017/eventsApp";
       mongodb.connect(url, function(err, db){
           var collection = db.collection('events');
           collection.find({}).toArray(function(err, results){
               
                res.render('events', {
        
                nav : [ {link: 'services',  text: 'Services'},
                {link: 'portfolio', text: 'Portfolio'},
                {link: 'about',     text: 'About'},
                {link: 'team',      text: 'Team'},
                {link: 'contact',   text: 'Contact'},
                {link: 'events',   text: 'Events'}
                ],
                events: results
        
        });
               
               
           });
       });
        
    });
    
eventRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        
         res.render('event', {
        
        nav : [ {link: 'services',  text: 'Services'},
                {link: 'portfolio', text: 'Portfolio'},
                {link: 'about',     text: 'About'},
                {link: 'team',      text: 'Team'},
                {link: 'contact',   text: 'Contact'},
                {link: 'events',   text: 'Events'}
                ],
        event: eventsData[id]
        
        });
        
    });
    
module.exports = eventRouter;