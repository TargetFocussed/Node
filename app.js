

const express = require('express');  // express module imported.
const bodyparser  = require('body-parser');  // importing bodyparser module
const routes = require('./routes/route');    // importing route modle


const app = express(); // module initiated.
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended : true,
}));

 routes(app);    
app.listen(8888, (error)=>{
    if(error){
        console.log(error);
    }
    console.log("Server Started..!");
    
});
