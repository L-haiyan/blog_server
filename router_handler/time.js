const { Time } = require('../model/time.js')
//获取时光轴
exports.gettime = async (req,res) =>{
    const result = await Time.find().sort({_id:-1})
    res.send({
        code:200,
        data:result
    })
},
//添加时光
exports.addtime = async(req,res)=>{
    const time = Date.parse(new Date())
    const author = req.body.author
    const content = req.body.content
    const result = await Time.create({
        time,
        author,
        content
    })
    res.send({
        code:200
    })
}
//删除时光
exports.deltime = async(req,res)=>{
    const id = req.body.id
    const result = await Time.findByIdAndDelete({_id:id})
    res.send({
        code:200
    })
}

//编辑时光
exports.edittime = async(req,res)=>{
    const id = req.body.id
    const content= req.body.content
    const time = Date.parse(new Date())
    const result = await Time.findByIdAndUpdate(id,{content,time})
    res.send({
        code:200
    })

}
