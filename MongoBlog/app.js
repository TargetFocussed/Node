
const mongo = require('mongodb').MongoClient;

const route = app=>{
    app.get("/posts", (req ,res)=>{

        mongo.connect("mongodb://localhost:27017/test", (err, db)=>{
            if(err) throw err;
                console.log("Mongo Server Connected");

            dbo = db.db("test");
            dbo.collection("post").find().toArray((err, result)=>{
                if(err) throw err;

                res.send(result);

                 db.close();
                 });
            }); 
        });

    app.get("/posts/:id",(req, res)=>{
            // const id = req.params.id;
            // console.log(id);

            mongo.connect("mongodb://localhost:27017/test", (err, db)=>{
                if(err) throw err;
                    console.log("Mongo Server Connected");
    
                dbo = db.db("test");
                console.log(req.params.id);
                var id  = req.params.id;
                dbo.collection("post").find({id:"id"}).toArray((err, result)=>{
                    if(err) throw err;
    
                    res.send(result);
    
                     db.close();
                     });
                }); 
            });

    app.post("/post",(req,res)=>{
//             const blog ={
//                 id : req.params.id,
//                 Name : req.params.name,
//                 Comments: req.params.Comments
//             }
            console.log(blog);
            
            mongo.connect("mongodb://localhost:27017/test", (err, db)=>{
                if(err) throw err;
                    console.log("Mongo Server Connected");
    
                dbo = db.db("test");
                dbo.collection("post").insertOne({
                    id: req.params.id,
                    Name: req.params.Name,
                    Comments: ["cmn1","cmn2"]
                });
                    res.status(200);
                    res.send("Ok");
    
                     db.close();
                     });
                }); 
           
    app.delete("/posts/:id",(req,res)=>{
        var id = req.params.id;
        mongo.connect("mongodb://localhost:27017/test", (err, db)=>{
            if(err) throw err;
                console.log("Mongo Server Connected");

            dbo = db.db("test");
            dbo.collection("post").removeOne({id: id});
                res.status(200);
                res.send("Ok");

                 db.close();
                 });
    })
            


};    
module.exports = route;
