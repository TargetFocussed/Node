const express = require('express');
const mariadb = require('mariadb');
const bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({
//     extended:true
// }));


var urlencoded = bodyparser.urlencoded({ extended: false })
var jsonmethod = bodyparser.json();

const db = mariadb.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : "Servicenow@2",    
    port : 3305,
    database : 'sampleproject'
})

.then( conn => {        
    app.post('/users',jsonmethod, (request,respond) => {
        console.log(request.body);
          let data = request.body.fullname;
      console.log(data);
     let krishna =  request.body.firstname;
     console.log(krishna)
      let kanth = request.body.lastname;
     
    conn.query("insert into sample values(?, ?, ?)",[data,krishna,kanth])
    .then((row) => {
        console.log("hello",row);
        respond.send("sucess full stored");
        conn.end();        
    })
    .then((err) => {
        console.log("errors occured",err);
    })   

})
///THIS IS BELONGS TO GET METHOD
app.get('/post',(request,respond) => {
    conn.query("select * from sample")
    .then((result)=>{
        console.log("respond",result); 
        respond.send("response"+JSON.stringify(result));             
        conn.end();
       
    })
   
    .then((err) => {
        console.log("error with get method");
    })
}) //END OF METHOD
    
})

.catch(err => {
    console.log("not connected due to error: " + err);
  });
var app = express();

app.listen(8885,() => {
    console.log("server srtarted 3000......")
})
