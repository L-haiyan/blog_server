exports.uplogo = async(req,res)=>{
      // 创建表单解析对象
      const form = new formidable.IncomingForm();
      // 配置上传文件的存放位置
      form.uploadDir = path.join(__dirname,'../', 'public', 'uploadlogo');
      // 保留上传文件的后缀
      form.keepExtensions = true;
      var cover = null
      form.parse(req, async(err, fields, files) => {
          console.log(files);
          cover = 'http://127.0.0.1:3007' + files.file.path.split('public')[1]
          res.send({
              logoUrl: cover
          })
      })
}