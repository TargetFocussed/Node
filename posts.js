const post = (app,store) => {
    
    app.get('/posts', (request, response) => {
        response.send({
           store
        });
    });
    app.post('/posts',(req,res) =>{
        let newAccount = req.body ;
          
          store.data.push(newAccount) 
           let id = store.data.length ;
            res.status(201).send({id: id}) 
        
    })
    app.put("/posts/:id",(req,res) => {
        store.data[req.params.id] = req.body;
        res.status(200).send(store.data[req.params.id])
    })
    
//     var server = app.listen(3000,()=>{
//         var host = server.address().address;
//         var port = server.address().port;
//         console.log("successfully run"+host+"port"+port);
 
//   });
    
}
module.exports = post;