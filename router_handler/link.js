const { Link } = require('../model/link.js')

//添加友链 ?
exports.addlink = async(req,res) =>{
   const nickname = req.body.nickname
   const logo = req.body.logo
   const address = req.body.address
   const tip = req.body.tip
   const jointime = Date.parse(new Date())
   const links = await Link.create({
            nickname,
            logo,
            address,
            tip,
            jointime
   })
   res.send({
       code: 200
   })
}

//获取所有友链 
exports.getlink = async(req,res) =>{
    const result = await Link.find().sort({_id:-1})
    res.send({
        data:result,
        code:200
    })
}

//编辑友链
exports.editlink = async(req,res) => {
    const id = req.query.id
    const result = await Link.findOne({_id:id})
    console.log(result)
    res.send({data:result,code:200})
}

//更新友链 ?
exports.updatelink = async (req,res) => {
    const id = req.body.id
    const logo = req.body.logo
    const address = req.body.address
    const tip = req.body.tip
    const nickname = req.body.nickname
    const time = Date.parse(new Date())
    const links = await Link.findOneAndUpdate(id,{logo:logo,address:address,nickname:nickname,tip:tip,time:time})
    res.send({
        code:200
    })
}

//获取六条友链
exports.getlink6 = async(req,res) => {
    const result = await Link.find().sort({id:-1}).limit(6)
    res.send(result)
}

//删除友链
exports.dellink = async(req,res) => {
    const id = req.query.id;
    const result = await Link.findByIdAndDelete({ _id: id })
    res.send({
        code: 200
    })
}
