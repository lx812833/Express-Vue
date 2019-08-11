const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

// 连接数据库
const { connect, initSchemas } = require("./database/init.js");
; (async () => {
    await connect()
    initSchemas()
})()

// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport.js")(passport)

// 引入路由
const users = require("./routes/api/users.js");
const profiles = require("./routes/api/profile.js")
// 使用路由
app.use("/api/users", users)
app.use("/api/profiles", profiles)

// 端口号
const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})