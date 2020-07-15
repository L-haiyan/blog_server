const express = require('express')
//创建路由对象
const router = express.Router()
//导入用户路由处理函数
const user_Handler = require('../router_handler/user')

//登录
router.post('/login',user_Handler.login)

module.exports = router