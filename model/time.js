const mongoose = require('mongoose');
const TimeSchema = new mongoose.Schema({
    time: {
        type: Number
    },
    content: {
        type: String
    },
    author: {
        type:String
    }
})


const Time = mongoose.model('Time',TimeSchema)
// Time.create({
//     time: 1469281964000,
//     content: '我好喜欢你哦，你是我一辈子想要依靠的人，我爱你！！谢谢你一直陪在我身边，我永远爱你！！！',
//     author:'kd-haiyan'
// }).then(()=>{
//     console.log('时光创建成功');
// }).catch(()=> {
//     console.log('时光创建失败');
// })


module.exports = {
    Time
}