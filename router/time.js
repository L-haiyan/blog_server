const express = require('express')
//创建路由对象
const router = express.Router()
//导入用户路由处理函数
const time_Handler = require('../router_handler/time')

//获取时间轴
router.get('/gettime',time_Handler.gettime)
//添加时光
router.post('/addtime',time_Handler.addtime)
//删除时光
router.post('/deltime',time_Handler.deltime)
//编辑时光
router.post('/edittime',time_Handler.edittime)

module.exports = router