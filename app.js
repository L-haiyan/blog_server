//引入express框架
const express = require('express');
//创建网站服务器
const app = express();
//引入path处理路径
const path = require('path');
//导入body-parser模块，用来处理post请求参数
const bodyParser = require('body-parser');
//导入初始化user.js文件
const {User }=require('./model/user');

// ---------
//导入生成的token包
// const jwt = require('jsonwebtoken');
// //导入全局的配置
// const config = require('./config.js');

// -------
const jwt = require('jsonwebtoken');
const fs = require('fs')
class Jwt {
    constructor(data) {
            this.data = data;
        }
        //生成token
    generateToken() {
            let data = this.data;
            let created = Math.floor(Date.now() / 1000);
            let cert = fs.readFileSync(path.join(__dirname, 'pem/private_key.pem')); //私钥 可以自己生成
            let token = jwt.sign({
                data,
                exp: created + 60 * 300,
            }, cert, { algorithm: 'RS256' });
            return token;
        }
        // 校验token
    verifyToken() {
        let token = this.data;
        let cert = fs.readFileSync(path.join(__dirname, 'pem/public_key.pem')); //公钥 可以自己生成
        let res;
        try {
            let result = jwt.verify(token, cert, { algorithms: ['RS256'] }) || {};
            let { exp = 0 } = result, current = Math.floor(Date.now() / 1000);
            if (current <= exp) {
                res = result.data || {};
            }
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}


// // 导入并配置cors中间件
const cors = require('cors');
app.use(cors());

app.use((req, res, next) => {
    var reg = '/login';
    if (req.url.includes('/admin')) {
        let token = req.headers.authorization;
        // console.log(req.headers);
        let jwts = new Jwt(token);
        let result = jwts.verifyToken();
        // 如果考验通过就next，否则就返回登陆信息不正确
        if (result == 'err') {
            res.status(403).send({ code: 403, msg: '登录已过期,请重新登录' });
        } else {
            next();
        }
    } else {
        next();
    }
});


//数据库连接
require('./model/connect');

//导入初始化essay.js文件
require('./model/essay')

//导入初始化star.js文件
require('./model/star')
//导入初始化link.js文件
require('./model/link')
//导入初始化words.js文件
require('./model/words')
//导入初始化time.jd文件
require('./model/time')
//导入初始化category
require('./model/category')

// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//注意：这个中间件只能解析application/x-wwww-form-urleencoded 格式的表单数据
app.use(express.urlencoded({ extended:false }));



//导入用户路由模块
// const userRouter = require('./router/user')
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
//导入时光轴路由模块
const timeRouter = require('./router/time')
//导入文章分类路由模块
const categoryRouter = require('./router/category')

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


// 登录
app.post('/login', async(req, res) => {

    // 获取用户信息
    const username = req.body.username;
    const password = req.body.password;
        // 查询用户
    const isUsername = await User.findOne({ username });
    console.log(isUsername);
    // 如果用户存在
    if (isUsername) {
        // const tokenStr = jwt.sign(isUsername.toJSON(),config.jwtSecretKey,{expiresIn:'10h'});
        // console.log(tokenStr);
        // 获取数据库中用户的密码
        const isPassword = isUsername.password
            // 密码比对
        if (isPassword === password) {
            const _id = isUsername._id.toString()
            // 对用户的信息进行加密生成token
   
            let Jwts = new Jwt(_id)
            let Token = Jwts.generateToken()
                console.log(Token);
            //     // 成功
            res.send({
                code: 200,
                data: '登陆成功啦',
            //    token: 'Bearer '+tokenStr
            token:Token
            })
        } else {
            // 失败
            res.send({
                data: '用户名或密码错误 '
            })
        }
    }
    // 用户不存在
    else {
        res.send({
            data: '不存在您输入的用户'
        })
    }

})



//app.use拦截请求
// app.use('/api',userRouter)
app.use('/',starRouter)
app.use('/',essayRouter)
app.use('/',linkRouter)
app.use('/',wordsRouter)
app.use('/',uplogoRouter)
app.use('/',upfileRouter)
app.use('/',timeRouter)
app.use('/',categoryRouter)

//监听端口
app.listen(3007,()=>{
    console.log('网站服务器开启成功');
});
