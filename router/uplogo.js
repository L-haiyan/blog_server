const express = require('express')
//创建路由对象
const router = express.Router()
const uplogo_Handler = require('../router_handler/uplogo')

//上传头像
router.post('/uplogo',uplogo_Handler.uplogo)

module.exports = router