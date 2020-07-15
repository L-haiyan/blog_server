//引入formidable模块
const formidable = require('formidable')
//引入path模块
const path = require('path')

exports.upfile = async(req,res) =>{
    //创建表单对象
    const form = new formidable.IncomingForm()
    //设置文件上传路径
    form.uploadDir = path.join(__dirname,'../','public','upload')
    //是否保留表单上传文件的后缀名
    form.keepExtensions = true
    var cover = null
    //对表单进行解析
    form.parse(req,async(err,fields,files) => {
        //fields 存储普通请求参数
        //files 存储上传的文件信息
        console.log(files)
        cover = 'http://127.0.0.1:3007'+files.jpg.path.split('public')[1]
        title = fields.title
        str = fields.content
        res.send({
            content: cover
        })
    })
}