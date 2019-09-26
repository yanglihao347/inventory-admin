var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  const {username, password} = req.body;
  if(username === 'admin' && password === '12345'){
    res.send({
      success: true,
      id: 12345,
      msg: '登录成功'
    })
  } else {
    res.send({
      success: false,
      msg: '用户名/密码错误'
    })
  }
});

module.exports = router;
