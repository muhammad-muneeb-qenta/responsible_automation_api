const express = require('express')
const router = express.Router()
const { CreateUser, GetUser, DeleteUser, UpdateUser, GetUserByEmail, GetUserById } = require('../Views/User.views')
const { CreateAccount, GetAccountByName, CreateIncome, CreateExpense, GetAccountById, UpdateIncome, GetAccountsByOwnerId,
    GetIncomesByAccountId, DeleteIncome, DeleteAccount, GetExpenseByAccountId, UpdateAccountIncome, UpdateAccountExpense,
    FilterByAccount, UpdateAccount, GetIncomeById, GetExpenseById, UpdateExpense,DeleteExpense } = require('../Views/Account.views')
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { parse } = require('dotenv');
const SECRET_KEY = "MUNEEBMUGHAL"
const session = require('express-session')
const cookieParser = require('cookie-parser')

router.use(cookieParser());
router.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "secret"
}))

//create/signup the user
router.post('/createusers', async (req, res) => {
    try {
        var User = []
        const { First_name, Last_name, Email, Gender, Password, Type, Hex,TwoFAEnabled } = req.body
        var User = await GetUserByEmail(Email)
        if (User) {
            res.status(500).send("User Already Exist")
        } else {
            //this is use to encrypt the password
            var salt = bcrypt.genSaltSync(10);
            var hashPassword = bcrypt.hashSync(Password, salt);
            //Type 2 for the user and type 1 for the admin
            const users = await CreateUser(First_name, Last_name, Email, Gender, hashPassword, Type, Hex,TwoFAEnabled)
            const data = {
                user: {
                    id: users.id
                }
            }
            //this is use to create the auth token
            const authtoken = jwt.sign(data, SECRET_KEY)
            res.status(200).send({ authtoken, First_name })
        }
    } catch (err) {
        res.status(400).send("User Not Created:" + err)
    }
})
//login user
router.post('/login', body('Email', 'Enter a valid Email').isEmail().normalizeEmail(),
    body('Password', 'Please Enter The Password').isLength({
        min: 1
    }), async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }
        try {
            const { Email, Password } = req.body
            const User = await GetUserByEmail(Email)
            const checkuser = await bcrypt.compare(Password, User.Password)

            if (checkuser) {
                const data = {
                    user: {
                        id: User.id
                    }
                }
                const authtoken = jwt.sign(data, SECRET_KEY)
                // req.session.user = User;
                // req.session.save()
                res.status(200).send({ authtoken, User })

            } else {
                res.status(500).send("Please Login With Correct Credatials")
            }

        } catch (err) {
            res.status(400).send("Some Error Occurs" + err)
        }
    })
//to logout user
router.get('/logout', async (req, res) => {
    req.session.destroy();
    res.send("User Logout")
})
//to get all the users
router.get('/users', async (req, res) => {
    const data = await GetUser()
    res.send(data)
})
//to get single user
router.get('/user', async (req, res) => {
    const { id } = req.query
    try {
        const data = await GetUserById(id)
        res.send(data)
    }
    catch (err) {
        res.status(404).send("Record Not Found " + err)
    }
})
//to update the user
router.post('/update', async (req, res) => {
    // const { id, First_name, Last_name, Email, Gender } = req.query
    const { id, First_name, Last_name, Email, Gender } = req.body
    try {
        if (id !== '' && id !== undefined && First_name !== '' && First_name !== undefined &&
            Last_name !== '' && Last_name !== undefined && Email !== '' && Email !== undefined && Gender !== '' && Gender !== undefined) {
            const data = await UpdateUser(id, First_name, Last_name, Email, Gender)
            res.send(data)
        } else {
            res.status(411).send("Input Field Is Missing")
        }
    }
    catch (err) {
        res.status(400).send("Record Not Updated Please Try Again " + err)
    }
})
//to delete the user
router.get('/delete', async (req, res) => {
    const { id } = req.query
    try {
        const data = await DeleteUser(id)
        res.send(data)
    }
    catch (err) {
        res.status(404).send("Record Not Found " + err)
    }
})

//Account routes start

//to create account

router.post('/createAccount', async (req, res) => {
    const { owner_id, account_name, currency, balance, income_object, expense_object } = req.body
    try {
        const account = await CreateAccount(owner_id, account_name, currency, balance, income_object, expense_object)
        res.status(200).send(true)
    } catch (err) {
        res.status(400).send("Account Not Created:" + err)
    }

})

//to get account 

router.get('/getAccounts', async (req, res) => {
    const { owner_id } = req.query
    try {
        const data = await GetAccountsByOwnerId(owner_id)
        res.send(data)
    }
    catch (err) {
        res.status(400).send("Account details not get:" + err)
    }
})

//get account by id
router.get('/getAccount', async (req, res) => {
    const { id } = req.query
    try {
        const data = await GetAccountById(id)
        res.send(data)
    }
    catch (err) {
        res.status(400).send("Account details not get:" + err)
    }
})

//for delete an account
router.get('/deleteaccount', async (req, res) => {
    const { id } = req.query
    try {
        const data = await DeleteAccount(id)
        res.send(data)
    }
    catch (err) {
        res.status(404).send("Record Not Found " + err)
    }
})

//for updateAccount
router.post('/updateAccount', async (req, res) => {
    const { id, AccountName, balanceValue, currencyValue } = req.body
    try {
        if (id !== '' && id !== undefined && AccountName !== '' && AccountName !== undefined &&
            balanceValue !== '' && balanceValue !== undefined && currencyValue !== '' && currencyValue !== undefined) {
            const data = await UpdateAccount(id, AccountName, balanceValue, currencyValue)
            res.send(data)
        } else {
            res.status(411).send("Input Field Is Missing")
        }
    }
    catch (err) {
        res.status(400).send("Record Not Updated Please Try Again " + err)
    }
})

//to create income
router.post('/createincome', async (req, res) => {
    const { name, amount, category, description, account_id } = req.body
    try {
        const account = await GetAccountById(account_id)
        const account_name = account.Name
        const account_balance = account.Balance
        const income_object = await CreateIncome(name, amount, category, description, account_name, account_id)
        const Income_byAccount = await GetIncomesByAccountId(account_id)
        var convert_balance = Number(amount)
        var total_balance = account_balance + convert_balance

        const create_account = await UpdateAccountIncome(account_id, Income_byAccount, total_balance)
        res.status(200).send(income_object)
    } catch (err) {
        res.status(400).send("Income Not Created:" + err)
    }

})
//to get incomes
router.get('/getIncomes', async (req, res) => {
    const { owner_id } = req.query
    try {
        const data = await GetAccountsByOwnerId(owner_id)
        res.send(data)
    }
    catch (err) {
        res.status(400).send("Incomes can not get:" + err)
    }
})

//get single income by id
router.get('/getincomeById', async (req, res) => {
    const { id } = req.query
    try {
        const data = await GetIncomeById(id)
        console.log(data)
        res.send(data)
    }
    catch (err) {
        res.status(400).send("Income can not get:" + err)
    }
})


//to delete income
router.get('/deleteincome', async (req, res) => {
    const { id, account_id } = req.query

    try {
        const Income_data = await GetIncomeById(id)

        const Resp = await DeleteIncome(id)

        const acountlist = await GetAccountById(account_id)
        const Income_object = await GetIncomesByAccountId(account_id)
        const account_balance = acountlist.Balance
        var total_balance = account_balance - Income_data.Amount
        const create_account = await UpdateAccountIncome(account_id, Income_object, total_balance)
        res.send(Resp)
    }
    catch (err) {
        res.status(404).send("Record Not Found " + err)
    }
})

//to Update income
router.post('/updateincome', async (req, res) => {
    const { id, account_id, Name, AccountName, Amount, Category, Description } = req.body

    try {
        const Income_data = await GetIncomeById(id)
        const Resp = await UpdateIncome(id, account_id, Name, AccountName, Amount, Category, Description)

        const acountlist = await GetAccountById(account_id)
        const Income_object = await GetIncomesByAccountId(account_id)
        const account_balance = acountlist.Balance
        var convert_balance = Number(Amount)
        var total_balance = 0
        if (Income_data.Amount === convert_balance) {
            var total_balance = account_balance
        } else if (Income_data.Amount > convert_balance) {
            var ac_balance = Income_data.Amount - convert_balance
            var total_balance = account_balance - ac_balance
        } else if (Income_data.Amount < convert_balance) {
            var ac_balance = convert_balance - Income_data.Amount
            var total_balance = account_balance + ac_balance
        }
        const create_account = await UpdateAccountIncome(account_id, Income_object, total_balance)
        res.send(create_account)
    }
    catch (err) {
        res.status(404).send("Record Not Found " + err)
    }
})

//to create Expense
router.post('/createexpense', async (req, res) => {
    const { account_id, name, amount, category, description } = req.body
    try {
        const account = await GetAccountById(account_id)

        const account_name = account.Name
        const account_balance = account.Balance
        const total_balance = account_balance - amount
        const accounts = await CreateExpense(account_id, account_name, name, amount, category, description)
        const expense_list = await GetExpenseByAccountId(account_id)
        const create_account = await UpdateAccountExpense(account_id, expense_list, total_balance)
        res.status(200).send(expense_list)
    } catch (err) {
        res.status(400).send("Income Not Created:" + err)
    }

})

router.get('/getExpense', async (req, res) => {
    const { owner_id } = req.query
    try {
        const data = await GetAccountsByOwnerId(owner_id)
        res.send(data)
    }
    catch (err) {
        res.status(400).send("Account details not get:" + err)
    }
})

//get expense by using id
router.get('/getexpenseById', async (req, res) => {
    const { id } = req.query
    try {
        const data = await GetExpenseById(id)
        res.send(data)
    }
    catch (err) {
        res.status(400).send("Expense can not get:" + err)
    }
})

//to Update Expense
router.post('/updateExpense', async (req, res) => {
    const { id, account_id, Name, Amount, Category, Description } = req.body

    try {
        const Expense_data = await GetExpenseById(id)
        const Resp = await UpdateExpense(id, Name, Amount, Category, Description)

        const acountlist = await GetAccountById(account_id)
        const Expense_object = await GetExpenseByAccountId(account_id)
        const account_balance = acountlist.Balance
        var convert_balance = Number(Amount)
        var total_balance = 0
        if (Expense_data.Amount === convert_balance) {
            var total_balance = account_balance
        } else if (Expense_data.Amount > convert_balance) {
            var ac_balance = Expense_data.Amount - convert_balance
            var total_balance = account_balance + ac_balance
        } else if (Expense_data.Amount < convert_balance) {
            var ac_balance = convert_balance - Expense_data.Amount
            var total_balance = account_balance - ac_balance
        }
        const create_account = await UpdateAccountExpense(account_id, Expense_object, total_balance)
        res.send(create_account)
    }
    catch (err) {
        res.status(404).send("Record Not Updated " + err)
    }
})
//delete the expense
router.get('/deleteexpense', async (req, res) => {
    const { id, account_id } = req.query

    try {
        const Expense_data = await GetExpenseById(id)

        const Resp = await DeleteExpense(id)

        const acountlist = await GetAccountById(account_id)
        const Expense_object = await GetExpenseByAccountId(account_id)
        const account_balance = acountlist.Balance
        var total_balance = account_balance + Expense_data.Amount
        const create_account = await UpdateAccountExpense(account_id, Expense_object, total_balance)
        res.send(Resp)
    }
    catch (err) {
        res.status(404).send("Record Not Found " + err)
    }
})


router.get('/filterbyaccount', async (req, res) => {
    const { owner_id, Name } = req.query
    try {
        const data = await FilterByAccount(owner_id, Name)
        res.send(data)
    }
    catch (err) {
        res.status(400).send("Account details not get:" + err)
    }
})
module.exports = router