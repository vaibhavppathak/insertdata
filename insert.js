var mongoose = require('mongoose'); //require mongoose native drivers
var url = 'mongodb://localhost/vaibhav'; //connection url of the database
var conn = mongoose.connect(url); //use the connect method to conenct to the server

var post_schema = mongoose.Schema({}, 
{
    collection: 'abc',
    strict: false,
});

var post = conn.model('new_post', post_schema);
var conn = mongoose.createConnection(url, function(error, db) 
{
    if (error) {
                   console.log("Unabel to connect to mongo server ERROR");
                } else {
                          console.log("Connection succesfull");
                          var detail = new post(
                          {
                             "name": "vaibhav_pathak",
                             "dob": "21-12-1994",
                             "gender": "male",
                           });

                           detail.save(function(err, records) 
                           {
                             if(err){
                                      throw error;
                                    }  else {
                                               console.log(records)
                                            }
                            });
                         }
});