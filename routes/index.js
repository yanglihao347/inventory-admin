var express = require('express');
var router = express.Router();
const { UserModel } = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/login', function(req, res, next) {
//   const {username, password} = req.body;
//   if(username === 'admin' && password === '12345'){
//     res.send({
//       success: true,
//       id: 12345,
//       msg: '登录成功'
//     })
//   } else {
//     res.send({
//       success: false,
//       msg: '用户名/密码错误'
//     })
//   }
// });


//用户注册路由，自用，不开放注册

router.post('/register', (req, res) => {
  const { username, password, type } = req.body;
  UserModel.findOne({ username }, (err, doc) => {
    if(err) {
      res.send({
        success: false,
        msg: '数据库查询错误',
      })
      return err;
    }
    if(doc) {
      res.send({
        success: false,
        msg: '用户名已存在'
      })
    } else {
      new UserModel({ username, password, type }).save((err, doc) => {
        if(err) {
          res.send({
            success: false,
            msg: '数据库操作错误',
          })
          return err;
        }
        res.send({
          success: true,
          msg: '注册成功',
          data: {
            username,
            _id: doc._id
          }
        })
      })
    }
  })
})

//用户登录路由
router.post('/login', (req, res) => {

  //1.获取请求参数
  const { username, password } = req.body;

  //2.处理数据逻辑
  UserModel.findOne({ username, password }, (err, doc) => {
    if(err) {
      res.send({
        success: false,
        msg: '数据库查询错误',
      })
      return err;
    }
    if(doc) {
      //3.返回成功数据
      res.send({
        success: true,
        msg: '登录成功',
        data: {
          username,
          _id: doc._id
        }
      })
    } else {
      //3.返回失败数据
      res.send({
        success: false,
        msg: '用户名/密码错误'
      })
    }
  })
})

module.exports = router;
