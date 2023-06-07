const mongoose = require('mongoose')

var AccountSchema = new mongoose.Schema({
    Owner_ID: { type: mongoose.Schema.Types.ObjectId, required: true },
    Name: { type: String, required: true },
    Currency: { type: String, required: true },
    Balance: { type: Number, required: true },
    date:{type:Date,default:Date.now()},
    Income_object:{type:Object},
    Expense_object:{type:Object},

})

var IncomesSchema = new mongoose.Schema({
    Account_name: {type:String, required: true },
    Account_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    Name:{type:String,required:true},
    Amount:{type:Number,required:true},
    Date:{type:Date,default:Date.now()},
    category:{type:String,required:true},
    Description:{type:String,required:true}
})

var ExpenseSchema = new mongoose.Schema({
    Account_name: {type:String, required: true },
    Account_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    Name:{type:String,required:true},
    Amount:{type:Number,required:true},
    Date:{type:Date,default:Date.now()},
    category:{type:String,required:true},
    Description:{type:String,required:true}
})


var AccountModel = mongoose.model("Account", AccountSchema)
var IncomeModel = mongoose.model("Incomes", IncomesSchema)
var ExpenseModel = mongoose.model("Expense", ExpenseSchema)


module.exports = {AccountModel,IncomeModel,ExpenseModel} 