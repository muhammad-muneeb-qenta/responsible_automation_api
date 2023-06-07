const express = require('express')
const router = express.Router()
const { CreateUser, GetUser, DeleteUser, UpdateUser, GetUserByEmail, GetUserById } = require('../Views/User.views')

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
        const { Name, Email, Password} = req.query
        var User = await GetUserByEmail(Email)
        if (User) {
            res.status(500).send("User Already Exist")
        } else {
            //this is use to encrypt the password
            var salt = bcrypt.genSaltSync(10);
            var hashPassword = bcrypt.hashSync(Password, salt);
            //Type 2 for the user and type 1 for the admin
            const users = await CreateUser(Name,Email,hashPassword)
            const data = {
                user: {
                    id: users.id
                }
            }
            //this is use to create the auth token
            const authtoken = jwt.sign(data, SECRET_KEY)
            res.status(200).send({ authtoken, Name })
        }
    } catch (err) {
        res.status(400).send("User Not Created:" + err)
    }
})
//login user
router.post('/login'
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }
        try {
            const { Email, Password } = req.query
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


module.exports = router