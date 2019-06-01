const comment = (app,store) => {
       
    app.get('/posts/:id/comments', (req, res) => {
        
        res.send(
           store.data[req.params.id].comments
        );
    })
    app.post('/posts/:id/comments',(req,res) =>{
        let newAccount = req.body ;  
          store.data[req.params.id].comments.push(newAccount) 
           let id = store.data[req.params.id].comments.length ;
            res.status(201).send({id: id}) 
        
    })
    app.put("/posts/:id/comments/commentid",(req,res) => {
        store.data[req.params.id].comments = req.body;
        res.status(200).send(store.data[req.params.id].comments)
    })
    
    
}
module.exports = comment;