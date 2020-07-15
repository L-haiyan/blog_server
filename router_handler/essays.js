const { Essay }  = require('../model/essay')

//书写文章
exports.writeEssay = async(req,res) => {
    const title = req.body.title
    const category = req.body.category
    const text = req.body.text
    const author = req.body.author
    const publishtime = req.body.publishtime
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
    const id = req.query.id
    const result = await Essay.findByIdAndDelete({ _id: id}).then(result=>console.log(result))
    res.send({
        status:'200'
    })
}

//获取需要编辑文章
exports.editessay = async(req,res) => {
    const id = req.query.id
    const result = await Essay.findById({ _id: id }).then(result=>{
        console.log(result)
        res.send(result)
    })
   
}

// 提交更新修改完的文章
exports.upessay = async(req,res) => {
    const id = req.body.id
    const title = req.body.title
    const category = req.body.category
    const text = req.body.text
    const author = req.body.author
    const publishtime = req.body.publishtime
    const update = await Essay.findByIdAndUpdate(id, { title:title, text:text, author:author, publishtime:publishtime, category:category });
    res.send({
        code: 200
    })
}