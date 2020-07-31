const express = require('express')
//创建路由对象
const router = express.Router()
//导入用户路由处理函数
const essay_Handler = require('../router_handler/essays')
//导入body-parser模块，用来处理post请求参数
const bodyParser = require('body-parser');

//书写文章
router.post('/writeEssay',essay_Handler.writeEssay)
// 删除文章
router.post('/delessay',essay_Handler.delessay)
//编辑文章
router.get('/editessay',essay_Handler.editessay)
//提交更新修改完的文章
router.post('/upessay',bodyParser.json(),essay_Handler.upessay)
//获取文章列表
router.get('/getessay',essay_Handler.getessay)
//获取最新的5篇文章
router.get('/getessay5',essay_Handler.getessay5)

module.exports = router