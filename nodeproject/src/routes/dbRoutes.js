var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var eventsData = [
                {
                    name: 'Event 1',
                    desc: 'This is a event 1 Make sre you mark it',
                    date: '13-May-2017',
                    time: '8:21 PM',
                    duration: '1 Hours',
                    img: '1.jpg',
                    location: {
                        streetAddress: 'North Karchi Sector 11-C 1',
                        city: 'Karachi',
                        state: 'Sindh',
                        zip: '75850',
                        lon: '0.24111',
                        lat: '543.555'
                    },
                    capactity: 100
                    },
                    {
                    name: 'Event 2',
                    desc: 'This is a event 2 Make sre you mark it',
                    date: '13-May-2017',
                    time: '8:21 PM',
                    duration: '1 Hours',
                    img: '2.jpg',
                    location: {
                        streetAddress: 'North Karchi Sector 11-C 1',
                        city: 'Karachi',
                        state: 'Sindh',
                        zip: '75850',
                        lon: '0.24111',
                        lat: '543.555'
                    },
                    capactity: 200
                    },
                    {
                    name: 'Event 3',
                    desc: 'This is a event 3 Make sre you mark it',
                    date: '13-May-2017',
                    time: '8:21 PM',
                    duration: '1 Hours',
                    img: '3.jpg',
                    location: {
                        streetAddress: 'North Karchi Sector 11-C 1',
                        city: 'Karachi',
                        state: 'Sindh',
                        zip: '75850',
                        lon: '0.24111',
                        lat: '543.555'
                    },
                    capactity: 300
                    },
                    {
                    name: 'Event 4',
                    desc: 'This is a event 4 Make sre you mark it',
                    date: '13-May-2017',
                    time: '8:21 PM',
                    duration: '1 Hours',
                    img: '4.jpg',
                    location: {
                        streetAddress: 'North Karchi Sector 11-C 1',
                        city: 'Karachi',
                        state: 'Sindh',
                        zip: '75850',
                        lon: '0.24111',
                        lat: '543.555'
                    },
                    capactity: 400
                    }
                    
                ];

dbRouter.route('/addEventData')
    .get(function(req, res){
       
       var url = "mongodb://localhost:27017/eventsApp";
       mongodb.connect(url, function(err, db){
           var collection = db.collection('events');
           collection.insertMany(eventsData, function(err, results){
               res.send(results);
               db.close();
           });
       });
       
    });
    

    
module.exports = dbRouter;