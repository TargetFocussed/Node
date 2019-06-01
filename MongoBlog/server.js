const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./app');

const app = express()
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended : false,
}));

routes(app);

app.listen(3000, err =>{
    if(err){
        console.log(err);
    }
    console.log("server Started");
    
})