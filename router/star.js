const express = require('express')
//创建路由对象
const router = express.Router()
//导入用户路由处理函数
const star_Handler = require('../router_handler/star')

//加星星
router.get('/addstar',star_Handler.addstar)
//获取星星数
router.get('/getstar',star_Handler.getstar)

module.exports = router