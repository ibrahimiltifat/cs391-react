const express = require("express");
const Datastore = require("nedb");

const app = express.Router();

module.exports = app;

let studentsDB = new Datastore({
	filename:  "./db/students.db",
	autoload: true,
});

studentsDB.ensureIndex({ fieldName: '_id', unique: true });


app.get( "/", function ( req, res ) {
    res.send( "Users API" );
} );

app.get( "/all", function ( req, res ) {
    console.log( process.env.PATH )
    studentsDB.find( {}, function ( err, docs ) {
        if(err)
        return res.send(err)
        res.send( docs );
    } );
} );

app.get("/signUP", (req, res) =>{
        studentsDB.findOne( {
            _id: 1
    }, function ( err, docs ) {
            if(!docs) {
                let User = { 
                    _id: 1,
                    email: "student@lms.com",
                    password: "student",
                    type:"student"
                  }
                  studentsDB.insert( User, function ( err, user ) {    
                      if(err)
                      return res.status(404).json("No User")
                      return res.status(202).json(user)                       
                });
            } else {
                return res.status(404).json("User already Exists")
            }
        } );
    } );
     
    app.post( "/login", function ( req, res ) {  
        console.log(req.body)
        studentsDB.findOne( {
            email: req.body.email,
            password: req.body.password
    
    }, function ( err, docs ) {
            return res.status(200).json(docs);
        } );
        
    } );