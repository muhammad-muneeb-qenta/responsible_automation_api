const mongoose = require('mongoose')
module.exports=()=>{
    const connectionParam={
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    };    
mongoose.connect("mongodb://127.0.0.1/myfirstdB",connectionParam).then(()=>{console.log("Database Connection Successfully")})

    
}