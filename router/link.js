const express = require('express')
//创建路由对象
const router = express.Router()
//导入body-parser模块，用来处理post请求参数
const bodyParser = require('body-parser');
//导入用户路由处理函数
const link_Handler = require('../router_handler/link')

// 添加友链
router.post('/addlink',link_Handler.addlink)
//获取友链
router.get('/getlink',link_Handler.getlink)
//编辑友链
router.get('/editlink',link_Handler.editlink)
//更新友链
router.post('/updatelink',link_Handler.updatelink)
//获取6条友链
router.get('/getlink6',link_Handler.getlink6)
//删除友链
router.get('/dellink',link_Handler.dellink)

module.exports = router