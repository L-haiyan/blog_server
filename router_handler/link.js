const { Link } = require('../model/link.js')

//添加友链 ?
exports.addlink = async(req,res) =>{
   const result = req.body.linkInfo
   console.log(result)
   const links = await Link.create({
       nickname:result.nickname,
       address:result.address,
       logo:result.logo,
       jointime:result.jointime
   })
   res.send({
       code: 200
   })
}

//获取所有友链 
exports.getlink = async(req,res) =>{
    const result = await Link.find().sort({_id:-1})
    res.send(result)
}

//编辑友链
exports.editlink = async(req,res) => {
    const id = req.query.id
    const result = await Link.findOne({_id:id})
    console.log(result)
    res.send(result)
}

//更新友链 ?
exports.updatelink = async (req,res) => {
    const {_id,nickname,logo,address,jointime} = linkInfo
    const links = await Link.findOneAndUpdate(_id,{logo:logo,jointime:jointime,address:address,nickname:nickname})
    console.log(logo)
    console.log(nickname)
    console.log(address)
    console.log(_id)
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
