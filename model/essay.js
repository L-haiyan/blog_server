//引入mongoose第三方模块
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
//创建文章规则
const essaySchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    publishtime: {
        type: String
    },
    category: {
        type: String
    },
    text: {
        type: String
    }
})

const Essay = mongoose.model('Essay', essaySchema)

// Essay.create({
//     title: '浅时光1',
//     author: 'haiyan',
//     category:'前端',
//     text:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈和哈哈哈哈哈哈哈哈哈',
//     viewSs:10
// }).then(()=>{
//     console.log('文章创建成功');
// }).catch(()=> {
//     console.log('文章创建失败');
// })

module.exports = {
    Essay
}