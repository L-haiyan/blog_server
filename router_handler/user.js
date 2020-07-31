// const { User } = require('../model/user.js')

// //登录的处理函数
// exports.login = async (req,res) => {
//     const username = req.body.username
//     const password = req.body.password
//     const isUser = await User.findOne({username})
//     if(isUser) {
//         const isPassword = isUser.password 
//         if(isPassword == password) {
//             req.session.username = isPassword
//             // const user = {...isuser}
//             // console.log(user);
//             return res.send({  
//                 code: 200,
//                 data: '登录成功! '
            
//             })
//         } else {
//             return res.send({
//               data:'登录失败！'
//             })
//         }
//     } else {
//        return  res.send({
//             data: '用户不存在！'
//         })
//     }
  
// }



