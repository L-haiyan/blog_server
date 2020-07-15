//引入express框架
const express = require('express');
//创建网站服务器
const app = express();
//引入path处理路径
const path = require('path');
//导入body-parser模块，用来处理post请求参数
const bodyParser = require('body-parser');
//引入模块express-session
const session = require('express-session')

// 导入并配置cors中间件
const cors = require('cors');
app.use(cors());

//配置解析表单数据的中间件
//注意：这个中间件只能解析application/x-wwww-form-urleencoded 格式的表单数据
app.use(express.urlencoded({ extended:false }));
//处理post请求参数
app.use(bodyParser.urlencoded({ extended: false }))
// 关于session的使用与配置
app.use(session({
    resave: false, //添加 resave 选项
    saveUninitialized: true, //添加 saveUninitialized 选项
    secret: 'aF,.j)wBhq+E9n#aHHZ91Ba!VaoMfC', // 建议使用 128 个字符的随机字符串
    cookie: { maxAge: 60 * 1000 }
  }));

//数据库连接
require('./model/connect');

//导入初始化essay.js文件
require('./model/essay')
//导入初始化user.js文件
require('./model/user')
//导入初始化star.js文件
require('./model/star')
//导入初始化link.js文件
require('./model/link')
//导入初始化words.js文件
require('./model/words')

// //在用户路由之前导入数据验证中间件
// app.use(function(req,res,next) {
//     res.cc = function(err,status=1) {
//         res.send({
//             // 状态
//             status,
//             // 状态描述，判断 err 是 错误对象 还是 字符串
//             message:err instanceof Error ? err.message : err,    
//         })
//     }
//     next()
// })
//导入用户路由模块
const userRouter = require('./router/user')
//导入增加/查询星星路由模块
const starRouter = require('./router/star')
//导入文章管理路由模块
const essayRouter = require('./router/essays')
//导入友链管理路由模块
const linkRouter = require('./router/link')
//导入留言管理路由模块
const wordsRouter = require('./router/words')
//导入上传文件路由模块
const upfileRouter = require('./router/upfile')
//导入上传头像路由模块
const uplogoRouter = require('./router/uplogo')

// 开放静态资源文件
app.use(express.static(path.join(__dirname,'public')));

// 开放跨域
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    //  允许客户端发送跨域请求时携带cookie信息
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, access-control-request-headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, authorization, Access-Control-Allow-Credentials, X-Auth-Token, X-Accept-Charset,X-Accept");
    next()
})


//app.use拦截请求
app.use('/api',userRouter)
app.use('/api',starRouter)
app.use('/api',essayRouter)
app.use('/',linkRouter)
app.use('/',wordsRouter)
app.use('/',uplogoRouter)
app.use('/',upfileRouter)

//监听端口
app.listen(3007,()=>{
    console.log('网站服务器开启成功');
});
