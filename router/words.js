const express = require('express')
//创建路由对象
const router = express.Router()
//导入用户路由处理函数
const words_Handler = require('../router_handler/words')

//发布留言
router.post('/upWords',words_Handler.upWords)
//获取全部留言/编辑留言
router.get('/getWords',words_Handler.getWords)
//获取5条留言
router.get('/getWords5',words_Handler.getWords5)
//根据id获取留言
router.get('/getWords1',words_Handler.getWords1)
//获取更多留言
router.get('/getmoreWords',words_Handler.getmoreWords)
//回复留言
router.post('/replayWords',words_Handler.replayWords)
//删除留言
router.post('/delWords',words_Handler.delWords)

module.exports = router