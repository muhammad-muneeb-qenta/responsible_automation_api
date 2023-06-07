const { MongoClient } = require('mongodb')

//url of the database
const url = "mongodb://127.0.0.1/"

//connection with mongodb
const Client = new MongoClient(url)

//name of the database
const database = 'myfirstdb'

module.exports =async function ConnectDb(){
    
    //connection confirm with mongodb
    let db = await Client.connect()

    //conect with the database
    let Collection = db.db(database)

    //connect with the collection
   return Collection.collection('records')

}