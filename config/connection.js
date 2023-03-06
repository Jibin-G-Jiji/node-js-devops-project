var MongoClient=require('mongodb').MongoClient
const state={
    db:null
}
module.exports.connect=function(done){
    const url='mongodb://localhost:27017'
    // const url='mongodb+srv://robinrrk:lTfNsYAmiNwTBUnD@cluster0.ckgss6e.mongodb.net/?retryWrites=true&w=majority'
    // const url = "mongodb+srv://robinme1971:robinme1971@cluster0.aazgtek.mongodb.net/?retryWrites=true&w=majority"
    const dbname='aclone'
    MongoClient.connect(url,(err,data)=>{
         if(err) return done(err)
         state.db=data.db(dbname)
         done()
    })

}

module.exports.get=function(){
    return state.db
}





// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://robinme1971:<password>@cluster0.aazgtek.mongodb.net/?retryWrites=true&w=majority";


// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
