
var path = require("path");

var BoyArray= require("../data/BoyArray")
var GirlArray=require("../data/GirlArray")
var BigArray=[];
var diffy =[]
module.exports = function(app) {

app.get("/api/friends", function(req, res) {
  console.log(res.body)

  // if(req.body.gender==="Male"){
  //   res.send(GirlArray)
  // }
  //   if(req.body.gender==="Female"){
  //   res.send(BoyArray)
  // }
BigArray.push(BoyArray)
BigArray.push(GirlArray)
console.log(BigArray)
  res.send(BigArray);

});

app.get("/api/friends/boy",function(req,res){
res.send(BoyArray);
})


app.get("/api/friends/girl",function(req,res){
res.send(GirlArray);
console.log(GirlArray)
})




app.post("/api/friends",function(req, res) {

   var meArray = req.body.scores;
   var total=0;
      for(var i in meArray) { 
            total += meArray[i]; 
             req.body.total=total;
        }

  if(req.body.gender=== "Male"){
        for(i=0; i<GirlArray.length;i++){
         GirlArray[i].difference=req.body.total-GirlArray[i].total;
              
              if(GirlArray[i].difference<0){
                  GirlArray[i].difference= GirlArray[i].difference * -1;
              }
              else{
                  GirlArray[i].difference= GirlArray[i].difference
              }
             
                 diffy.push(GirlArray[i].difference);
                 diffy.sort();       
                       GirlArray.sort(function(a, b) {
                           return parseFloat(b.difference) - parseFloat(a.difference);
              
                        });
        }
                        console.log(GirlArray)  
                        GuyArray.push(req.body)
                        res.send(GirlArray)
}

  
if(req.body.gender=== "Female"){
        for(i=0; i<BoyArray.length;i++){
         BoyArray[i].difference=req.body.total-BoyArray[i].total;
              
              if(BoyArray[i].difference<0){
                  BoyArray[i].difference= BoyArray[i].difference * -1;
              }
              else{
                  BoyArray[i].difference= BoyArray[i].difference
              }
             
                 diffy.push(BoyArray[i].difference);
                 diffy.sort();       
                      BoyArray.sort(function(a, b) {
                           return parseFloat(b.difference) - parseFloat(a.difference);
              
                        });
        }               console.log(req.body.name+ " Here is who you are most compatable with");
                        console.log(" ")
                        console.log(BoyArray)  
                        GirlArray.push(req.body)
                        res.send(BoyArray)
                        //console.log(GirlArray)
}

});



 app.post("/api/clear", function() {
    // Empty out the arrays of data
    BoyArray= [];
    GirlArray= [];

    console.log(BigArray)
  });



}