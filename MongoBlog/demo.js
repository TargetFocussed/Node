const mongo = require('mongodb').MongoClient;

//var url ="mongodb://localhost:27017/test";

mongo.connect("mongodb://localhost:27017/test", (err, db)=>{
    if(err){
        throw err;
    }
    console.log("Mongo Server Connected");
    // dbo = db.db("test");
    // dbo.collection("post").find().toArray((err, result)=>{
    //     if(err) throw err;
    //     console.log(result);
    // })

    db.close();
})

module.exports.mongo = mongo;
