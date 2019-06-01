// const express = require('express');
// const logger = require('morgan');
// const errorhandler = require('errorhandler');
// const bodyParser = require('body-parser');
// var app = express();

// app.use(bodyParser.json())
// //app.use(logger('dev'))
// //app.use(errorhandler())

// let store={};
// store.accounts=[];
// app.get('/accounts',(req,res) => {
//     res.send(store.accounts);
// })
// app.post('/accounts', (req, res) => { 

//     let newAccount = req.body 
    
//     store.accounts.push(newAccount) 
//     let id = store.accounts.length ;
//     res.status(201).send({id: id}) 
    
//     }) 
    
// app.put('/accounts/:id', (req, res) => { 
//     store.accounts[req.params.id] = req.body;
//      res.status(200).send(store.accounts[req.params.id]) 
//     }) 
    
// var server = app.listen(3000,()=>{
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log("server"+host+"port"+port);
// })

const express = require('express');
 const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
 var app = express();
 const posts = require('../routes/posts');
 var comments = require('../routes/comments');

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:false}));

 var store = {
    data: [
      {name: 'Top 10 ES6 Features every Web Developer must know',
      url: 'https://webapplog.com/es6',
      text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
      comments: [
          {
        text: 'Cruel…..var { house, mouse} = No type optimization at all.'
          }
        
      ]
      }
    ]
  }
  comments(app,store);
  
  posts(app,store);
 
  var server = app.listen(3000,()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log("successfully run"+host+"port"+port);

});
 