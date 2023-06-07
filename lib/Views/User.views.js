const UserModel = require('../models/user.model')

const CreateUser = async (Name,  Email, Password) => {

    const resp = await UserModel.create({
       
        Name: `${Name}`,
        Email: `${Email}`,
        Password: `${Password}`,
    })

    return resp;
}

const GetUser = async () => {
    const data = await UserModel.find()
    return data
}

const GetUserByEmail = async (Email) => {
    const data = await UserModel.findOne({ Email: Email })
    return data
}
const GetUserById = async (Id) => {
    const data = await UserModel.findOne({ _id: Id })
    return data
}


const DeleteUser = async (Id) => {
    const data = await UserModel.findOne({ _id: Id })
    const resp = await UserModel.deleteOne({
        _id: Id
    })
    return data.Email

}

const UpdateUser = async (id, First_name, Last_name, Email,Gender) => {
    const resp = await UserModel.updateOne({
        _id: id
    }, { $set: { First_name: First_name, Last_name: Last_name, Email: Email, Gender: Gender } })

    return resp.acknowledged


}
module.exports = { CreateUser, GetUser, DeleteUser, UpdateUser, GetUserByEmail,GetUserById }