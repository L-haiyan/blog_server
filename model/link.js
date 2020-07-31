const mongoose = require('mongoose')
const LinkSchema = new mongoose.Schema({
    nickname: {
        type: String
    },
    address: {
        type: String
    },
    logo: {
        type: String
    },
    jointime: {
        type:Number
    },
    tip:{
        type:String
    }
})


const Link = mongoose.model('link', LinkSchema)

// Link.create({
//     nickname:"haiyan",
//     jointime:"2020",
//     address:"http:",
//     logo:"http"
// })
module.exports = {
    Link
}