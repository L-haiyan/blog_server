const { Essay }  = require('../model/essay')

//书写文章
exports.writeEssay = async(req,res) => {
    const title = req.body.title
    const category = req.body.category
    const text = req.body.text
    const author = req.body.author
    const publishtime = Date.parse(new Date())
    const essays = await Essay.create({ 
        title:title, 
        text:text, 
        author:author,
        publishtime:publishtime,
        category:category });
    res.send({
        code: 200
    })
}

//删除文章
exports.delessay = async(req,res) => {
    const id = req.body.id
    const result = await Essay.findByIdAndDelete({ _id: id})
    res.send({
        code:200
    })
}

//获取需要编辑文章
exports.editessay = async(req,res) => {
    const id = req.query.id
    const result = await Essay.findById({ _id: id }).then(result=>{
        console.log(result)
        res.send({result,code:200})
    })
   
}

// 提交更新修改完的文章
exports.upessay = async(req,res) => {
    const id = req.body.id
    const title = req.body.title
    const category = req.body.category
    const text = req.body.text
    const author = req.body.author
    const publishtime = Date.parse(new Date())
    const update = await Essay.findByIdAndUpdate(id, { title:title, text:text, author:author, publishtime:publishtime, category:category });
    res.send({
        code: 200
    })
}

//获取文章
exports.getessay = async(req,res) =>{
    const result = await Essay.find().sort({_id:-1})
    res.send({
        code:200,
        data:result
    })
}

//获取最新的5篇文章
exports.getessay5 = async(req,res) =>{
    const result = await Essay.find().sort({_id:-1}).limit(5)
    res.send({
        code:200,
        data:result
    })
}