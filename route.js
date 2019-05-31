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


const route = app =>{

    app.get('/users',(req, res)=>{
        res.send(users);
        
    });

    app.post('/user',(req,res)=>{
        res.send("Hello Sekhar");
    });

}
module.exports = route;
