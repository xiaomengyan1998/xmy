// 引入 express
const express = require("express");

// 引入 抽离出去的路由文件
const postRouter = require("./routers/postRouter");

// 实例化一个express的实例
const app = express();

// 调用路由文件，并设置好前缀
app.use("/posts", postRouter);

// 监听端口，启动服务
app.listen(3000, () => {
  console.log("服务启动成功");
});
