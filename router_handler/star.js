const { Star } = require('../model/star.js')
//加星星
exports.addstar = async (req,res) =>{
    let curNum = await Star.find({})
    let finNum = curNum[0].num + 1
    const result = await Star.update({num:finNum})
    res.send({
        code:200
    })
}
//获取星星
exports.getstar = async (req,res) => {
    const result = await Star.find()
    res.send({
        num:result[0].num
    })
}