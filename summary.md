### 基础

1. GET  URL < 32k

2. POST  RequestBody 1G

3. post 分段传输  data  end两个事件

4. 模块化 、 模块管理器

* assert 断言

* buffer 

* child processes

* cluster

* command line options

* cryto 加密 md5 sha

* dns

* events

* fs

* http https 

* modules

* net

* os

* path

* process 进程信息

* querystring 

* stream

* TTY 远端命令行

* UDP

* util

* v8 引擎

* vm  虚拟机

* zlib 压缩库 本质是流

###  自定义模块

1. 模块组成

2. npm

3. 

```
    引入  require

    模块  module

    输出  exports
    (function(require, exports, module) {
        var a = 12;
        var b = 5;
    })()
    包在匿名函数
```

4. nodejs 模块

require('http') --- 系统

require('./mod') --- 当前目录 为何自定义模块要./原因

exports 单个

module.exports 批量

---------------------
./ 从当前目录  如果不加 放到node_modules去找

如果不加 先去全局系统找   然后去node_modules找 

node: npm login
npm whoami

npm init

index.js

npm publish

express 非侵入式 不破坏原来的 

send({}) 

write(string/buffer)

get url  req res

post url req res

use url req res get post 通吃


form 如果不加 http:// 跨域   加了不存在

static 静态文件  npm install express-static

server(bodyParse({
    extended: true // 扩展模式
    limit: // 限制 默认是100k
}));

body-parse

req.query

req.body

### 中间件

server.use(function(req, res, next){

});

res.cookie(name,val,{path/maxage})
maxage ms

cookie 目录权限是由上往下

cookie 加密 req.secret cookie签名的秘钥 字符串

如何使用签名 res.cookie(name,val,{path/maxage,sigined:true})
设置签名=true
原文可以看见 不是加密 杜绝修改

解签名的秘钥 server.use(cookieParse('签名就是secret'));

签名 缺点 增加很多字符 cookie 本身小

一个浏览器能创建的 Cookie 数量最多为 300 个，并且每个不能超过 4KB，每个 Web 站点能设置的 Cookie 总数不能超过 30h或50 个

4096字节 4 * 2**10  对于两个字节为一个字符 约等于 2000个字符

req.signedCookie() 签名的cookie
req.cookie()  无签名的cookie

发送cookie
res.cookie(name,val, {path, maxAge, signed})

读取cookie
cookie-parser

server.use(cookieParser('签名'));
server.user(function(req, res) {
    req.cookies  未签名
    req.signedCookies 签名
})

删除cookie

res.clearCookie(name);

#### cookie加密

cookieEncrypter() 加密

### cookie-session  session

写入session
server.use(cookieSession({
    name: 'sess', --- 可以改session的名字
    Keys:[秘钥数组]，
    maxAge:
}))

读取session

req.session

删除session

delete res.session

session劫持 让秘钥数组足够大

### express

1. express

2. express-static

3. cookie-parser

4. cookie-session

5. body-parser(application/x-www-urlencoded) 解析数据 不能解析文件  req.body

6. multer 解析文件  req.files  multer.dest()

7. ejs

8. jade

* form enctype application/x-www-urlencoded multipart/form-data text/plain

* 文件 mimeType 可以欺骗

* fs.rename(old, new ,function(err) {})

* consolidate 模板引擎整合器

```
server.set('view engine', 'html');

server.set('views', 模板文件目录)

server.engine('html', consolidate.ejs);

res.render('1.js', renderData);

```

### router

var router = express.Router();

var router1 = router.get(url, module)

var router2 = router.post(url, module)

var router3 = router.use(url, module)

sever.use(url1, router1)

sever.use(url2, router2)

### 路由示范
http://www.dns.com/user/user_mod

http://www.dns.com/user/user_reg

var router1 = express.Router()

server.use('/user', router1);

var router1.1 = express.Router();

var router1.2 = express.Router();

router1.use('/user_mod', router1.1)

router1.use('/user_reg', router1.2)



