const express = require('express')
//创建路由对象
const router = express.Router()
//导入用户路由处理函数
const category_Handler = require('../router_handler/category.js')

//获取文章分类
router.get('/getCategory',category_Handler.getCategory)


module.exports = router