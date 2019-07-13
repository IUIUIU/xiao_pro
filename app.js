// 通过node方式引入express模块
const express = require('express')

// 创建一个express对象
const app = express()

// 配置compression：需要在dist文件目录被托管之前来配置：
const compression = require('compression')
app.use(compression())

// 设置dist目录文件被托管：(设定该dist目录的文件可以被访问)
app.use(express.static('./dist'))

// 创建Http服务，设置端口号：
app.listen(9876,function(){
  console.log('项目运行在\nhttp://127.0.0.1:9876')
})
