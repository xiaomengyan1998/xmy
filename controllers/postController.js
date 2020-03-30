// 帖子的控制器，暴露一系列中间件方法给到帖子的路由去使用

// 引入 PostModel
const PostModel = require("../models/postModel");

/**
 * 查询帖子
 */
exports.index = async (req, res) => {
  // Model.find()
  const data = await PostModel.find();
  res.send({ code: 0, msg: "成功", data: data });
};

/**
 * 创建帖子
 */
exports.create = async (req, res) => {
  // 获取前端传递过来的参数
  const { title, content } = req.body;

  // Model.create()
  // PostModel.create({
  //   title,
  //   content
  // })
  //   .then(() => {
  //     // 成功
  //     res.send({
  //       code: 0,
  //       msg: "成功"
  //     });
  //   })
  //   .catch(error => {
  //     // 失败
  //     console.log(error);
  //     res.send({
  //       code: -1,
  //       msg: "失败"
  //     });
  //   });

  await PostModel.create({ title, content });
  res.send({ code: 0, msg: "成功" });
};

/**
 * 更新帖子
 */
exports.update = async (req, res) => {
  // 要更新的帖子的Id
  const { id } = req.params;

  // 更新的内容 req.body
  // const { title, content } = req.body;

  // Model.updateOne()
  // await PostModel.updateOne({ _id: id }, { title: title, content: content });
  await PostModel.updateOne({ _id: id }, req.body); // { content: '2' }
  res.send({ code: 0, msg: "成功" });
};

/**
 * 删除帖子
 */
exports.remove = async (req, res) => {
  // 获取Id
  const { id } = req.params;

  // Model.deleteOne()
  await PostModel.deleteOne({ _id: id });
  res.send({ code: 0, msg: "成功" });
};
