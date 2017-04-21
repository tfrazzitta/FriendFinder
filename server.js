var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();
//var GirlArray= require("../data/GirlArray");
//var BoyArray= require("../data/BoyArray");
// Sets an initial port. We"ll use this later in our listener
var PORT = 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/api-routes")(app);
require("./routing/html-routes")(app);


var diffy=[];























// app.get("/home", function(req, res) {
//   res.sendFile(path.join(__dirname, "/public/home.html"));

// });


// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "/public/survey.html"));

// });



// app.get("/api/friends", function(req, res) {
//   // res.json(****COMPATABLE FRIENDS^^^^^);

// });


// app.post("/api/friends",function(req, res) {

//    var meArray = req.body.scores;
//    var total=0;
//       for(var i in meArray) { 
//             total += meArray[i]; 
//              req.body.total=total;
//         }

//   if(req.body.gender=== "Male"){
//         for(i=0; i<GirlArray.length;i++){
//          GirlArray[i].difference=req.body.total-GirlArray[i].total;
              
//               if(GirlArray[i].difference<0){
//                   GirlArray[i].difference= GirlArray[i].difference * -1;
//               }
//               else{
//                   GirlArray[i].difference= GirlArray[i].difference
//               }
             
//                  diffy.push(GirlArray[i].difference);
//                  diffy.sort();       
//                        GirlArray.sort(function(a, b) {
//                            return parseFloat(b.difference) - parseFloat(a.difference);
              
//                         });
//         }
//                         console.log(GirlArray)  
//                         GuyArray.push(req.body)
// }

  
// if(req.body.gender=== "Female"){
//         for(i=0; i<BoyArray.length;i++){
//          BoyArray[i].difference=req.body.total-BoyArray[i].total;
              
//               if(BoyArray[i].difference<0){
//                   BoyArray[i].difference= BoyArray[i].difference * -1;
//               }
//               else{
//                   BoyArray[i].difference= BoyArray[i].difference
//               }
             
//                  diffy.push(BoyArray[i].difference);
//                  diffy.sort();       
//                       BoyArray.sort(function(a, b) {
//                            return parseFloat(b.difference) - parseFloat(a.difference);
              
//                         });
//         }               console.log(req.body.name+ " Here is who you are most compatable with");
//                         console.log(" ")
//                         console.log(BoyArray)  
//                         GirlArray.push(req.body)
//                         //console.log(GirlArray)
// }

// });



//  app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     BoyArray= [];
//     GirlArray= [];

//     console.log(tableData);
//   });






app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
  console.log(" ")
    
});



