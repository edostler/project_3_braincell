const express = require("express");                 // SERVER as installed by npm i express
const app = express();

const path = require("path");                       // comes with node
const bodyParser = require("body-parser");          // TO HANDLE POST body: as installed by npm i body-parser

app.use(bodyParser.json());                         // app will accept json bodies
app.use(bodyParser.urlencoded({extended: true}));   // needed for json

// // This tells express where to find your static files,
// //e.g. index.html and any CSS files too...
// app.use(express.static("client/build"));

const MongoClient = require("mongodb").MongoClient;   // db client, as installed by npm i mongodb

// connect to mongo db client on localhost, port 27017, which is the default port for mongo
// and it takes in an anon function, that returns an 'err' status and a 'client' connection:
MongoClient.connect("mongodb://localhost:27017", function(err, client){
  if(err){
    console.log(err);
    return;
  }

  //get the client db connection:
  const db = client.db("braincell_db");

  // app is our express server:
  app.get("/players", function(req, res){
    const playerCollection = db.collection("players");
    // takes an anon function that converts all players objects to array & returns err status and coffees:
    playerCollection.find().toArray(function(err, players){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.json(players);
    });
  });

  app.listen(3001, function(){
    console.log("Listening for requests on port 3001!");
  })

});
