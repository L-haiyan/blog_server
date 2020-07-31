const { Words } = require('../model/words.js')

//发布留言
exports.upWords = async(req,res) => {
    const nickname = req.body.nickname
    const email = req.body.email
    const content = req.body.content
    const replay = ""
    const time = Date.parse(new Date())
    const update = await Words.create({
        nickname,
        content,
        time,
        replay,
        email
    })
    res.send({
        code:200
    })
}

//获取全部留言
exports.getWords = async(req,res) => {
        const result = await Words.find().sort({_id:-1})
        res.send({
            data: result,
            moreData: true
        })
  
}
//获取5条留言
exports.getWords5 = async(req,res) => {
    const result = await Words.find().sort({_id:-1}).limit(5)
    res.send({
        data:result,
        moreData:true
    })
}

//根据id获取留言'
exports.getWords1 = async(req,res) => {
    const id = req.query.id
    const result = await Words.findById({ _id: id })
    res.send({
        code: 200,
        data:result
    })
}

//回复留言/类似于编辑
exports.replayWords = async(req,res) => {
    const replay = req.body.replay
    const id = req.body.id
    const update = await Words.findByIdAndUpdate(id,{replay:replay})
    res.send({
        code: 200
    })
}

//删除留言
exports.delWords = async(req,res) => {
    const result = req.body.id;
    const words = await Words.findByIdAndDelete({ _id: result })
    res.send({
        code: 200
    })
}

//获取更多留言
exports.getmoreWords = async(req,res) => {
    const moreData = await req.query.moreData
    if(moreData == 'true') {
    let count = 10
    const result = await Words.find().sort({_id:-1}).skip(count).limit(10)   
    if(result.length>=10) {
        count+=10
    } else {
        res.send({
            data: result,
            moreData: false
        })
        count = 10
    }
    
}
}