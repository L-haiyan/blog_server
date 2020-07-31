const { Category } = require('../model/category.js')

//获取文章分类
exports.getCategory = async (req,res) => {
    const result = await Category.find()
    res.send({
        code:200,
        data:result
    })
}