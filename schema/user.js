//导入定义验证规则的包
const joi = require('@hapi/joi')

//定义用户名和密码的验证规则 
const username = joi.string().alphanum().min(1).max(10).required()//用户名的验证规则 
const password = joi.string().pattern(/^[\S]{6,12}$/).required()// 密码的验证规则

// 注册和登录表单的验证规则对象
exports.login_schema = {
    //表示需要对req.bidy中的数据进行验证
    body:{
        username,
        password
    }
}
