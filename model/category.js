//引入mongoose第三方模块
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
//创建文章规则
const categorySchema = new mongoose.Schema({
    title: {
        type: String
    },
    info:{
        type:String
    }
})

const Category = mongoose.model('Category', categorySchema)

// Category.create({
//     title: 'node',
//     info:'关于阅读的文章，比如《JavaScript DOM 编程艺术》、《JavaScript高级程序设计》等。'
// }).then(()=>{
//     console.log('文章分类创建成功');
// }).catch(()=> {
//     console.log('文章分类创建失败');
// })

module.exports = {
    Category
}