const mongoose = require('mongoose');
const WordsSchema = new mongoose.Schema({
    nickname: {
        type: String
    },
    content: {
        type: String
    },
    time: {
        type: Number
    },
    replay: {
        type: String
    },
    email: {
        type:String
    }
})


const Words = mongoose.model('Words',WordsSchema)

// Words.create({
//     time: 1595379860000,
//     content: 'haiyan最棒，永远是我心中女神',
//     nickname:'haiyan',
//     replay:'真的好棒哦',
//     email:'1094123797@qq.com'
// }).then(()=>{
//     console.log('留言创建成功');
// }).catch(()=> {
//     console.log('留言创建失败');
// })


module.exports = {
    Words
}