const Connection = require('./database')

async function GetData(){

    const data = await Connection()
    const result =await data.find({}).toArray();
    console.log(result)
}

async function SetData(){

    const data = await Connection()
    const result = await data.insert({
        name:"ali",
        age:52
    })
    console.log(result)
}

async function UpdateData(){

    const data = await Connection()
    //you can use here update,updateMany
    const result = await data.updateOne({
        name:"ali"
    },{$set:{name:'ali raza',age:25}})
    console.log(result)
}

async function DeleteData(){

    const data = await Connection()
    //you can use here deleteMany
    const result = await data.deleteOne({
        name:"ali raza"
    })
    console.log(result)
}

//DeleteData()
//UpdateData()
//SetData()
GetData()