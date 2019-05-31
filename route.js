const users = [{
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
},
{
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
},
];

const pool = require('../config/config');

const route = app =>{
    // app.get('/', (request, response) => {
    //     response.send({
    //         message: 'Node.js and Express REST API'
    //     });
    // });

    app.get('/users',(req, res)=>{
        res.send(users);
        
    });

    app.post('/user',(req,res)=>{
        res.send("Hello Sekhar");
    });

}
module.exports = route;