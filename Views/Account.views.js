const { AccountModel, IncomeModel, ExpenseModel } = require('../models/account.model')

const CreateAccount = async (Owner_ID, Name, Currency, Balance, Income_object, Expense_object) => {
    const resp = await AccountModel.create({
        Owner_ID: `${Owner_ID}`,
        Name: `${Name}`,
        Currency: `${Currency}`,
        Balance: `${Balance}`,
        Income_object: `${Income_object}`,
        Expense_object: `${Expense_object}`

    })
    return resp;
}

const UpdateAccountIncome = async (account_id, account, total_balance) => {
    const resp = await AccountModel.updateOne({
        _id: account_id
    }, { $set: { Income_object: account, Balance: total_balance } })
    return resp.acknowledged
}
const UpdateAccountExpense = async (account_id, account, total_balance) => {
    const resp = await AccountModel.updateOne({
        _id: account_id
    }, { $set: { Expense_object: account, Balance: total_balance } })
    return resp.acknowledged
}

const UpdateAccount = async (id, AccountName, balanceValue, currencyValue) => {
    const resp = await AccountModel.updateOne({
        _id: id
    }, { $set: { Name: AccountName, Currency: currencyValue, Balance: balanceValue } })
    return resp.acknowledged
}


const GetAccountsByOwnerId = async (owner_id) => {
    const resp_data = await AccountModel.find({ Owner_ID: owner_id })
    return resp_data;
}
const GetAccountById = async (id) => {
    const resp_data = await AccountModel.findOne({ _id: id })
    return resp_data;
}
const GetAccountById2 = async (id) => {
    const resp_data = await AccountModel.find({ _id: id })

    const result = await AccountModel.deleteOne({ _id: "63dba56750fc5072a967a2bf" }, { $pull: { Income_object: { _id: "63e6456b7a5027562941da65" } } })
    console.log(result)
    return result;
}
const DeleteAccount = async (Id) => {
    const data = await AccountModel.findOne({ _id: Id })
    const resp = await AccountModel.deleteOne({
        _id: Id
    })
    const deleteExpense = await ExpenseModel.deleteMany({
        Account_id: Id
    })
    const deleteIncome = await IncomeModel.deleteMany({
        Account_id: Id
    })
    return data

}

const CreateIncome = async (Name, Amount, category, Description, Account_name, Account_id) => {
    const resp = await IncomeModel.create({
        Account_name: `${Account_name}`,
        Account_id: `${Account_id}`,
        Name: `${Name}`,
        Amount: `${Amount}`,
        category: `${category}`,
        Description: `${Description}`,
    })
    return resp;
}

const GetIncomesByAccountId = async (Account_id) => {
    const resp_data = await IncomeModel.find({ Account_id: Account_id })
    return resp_data

}

const DeleteIncome = async (Id) => {
    const data = await IncomeModel.findOne({ _id: Id })
    const resp = await IncomeModel.deleteOne({
        _id: Id
    })
    return resp

}

const UpdateIncome = async (id, account_id, Name, AccountName, Amount, Category, Description) => {
    const resp = await IncomeModel.updateOne({
        _id: id
    }, { $set: { Account_name: AccountName, Account_id: account_id, Name: Name, Amount: Amount, category: Category, Description: Description } })
    return resp.acknowledged
}


const GetIncomeById = async (id) => {
    const data = await IncomeModel.findOne({ _id: id });
    return data;
}

const CreateExpense = async (Account_id, Account_Name, Name, Amount, category, Description) => {
    const resp = await ExpenseModel.create({
        Account_name: `${Account_Name}`,
        Account_id: `${Account_id}`,
        Name: `${Name}`,
        Amount: `${Amount}`,
        category: `${category}`,
        Description: `${Description}`,
    })
    return resp;
}

const GetExpenseByAccountId = async (account_id) => {
    const resp_data = await ExpenseModel.find({ Account_id: account_id })
    return resp_data
}

const GetExpenseById = async (id) => {
    const data = await ExpenseModel.findOne({ _id: id });
    return data;
}

const UpdateExpense = async (id,  Name, Amount, Category, Description) => {
    const resp = await ExpenseModel.updateOne({
        _id: id
    }, { $set: { Name: Name, Amount: Amount, category: Category, Description: Description } })
    return resp.acknowledged
}

const DeleteExpense = async (Id) => {
    // const data = await ExpenseModel.findOne({ _id: Id })
    const resp = await ExpenseModel.deleteOne({
        _id: Id
    })
    return resp

}
const FilterByAccount = async (account_id, Name) => {
    const resp_data = await AccountModel.find({ Account_id: account_id, Name: Name })
    return resp_data

}
module.exports = { CreateAccount, CreateIncome, CreateExpense, GetAccountsByOwnerId,
     GetAccountById2, GetIncomesByAccountId, GetAccountById, UpdateAccount,
      GetExpenseByAccountId, UpdateAccountIncome, UpdateAccountExpense, FilterByAccount,
       DeleteAccount, DeleteIncome, GetIncomeById, UpdateIncome, GetExpenseById,UpdateExpense,DeleteExpense } 