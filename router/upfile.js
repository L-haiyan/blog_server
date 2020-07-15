const express = require('express')
//创建路由对象
const router = express.Router()
const upfile_Handler = require('../router_handler/upfile')

//上传文件
router.post('/upfile',upfile_Handler.upfile)

module.exports = router