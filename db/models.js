const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/inventory_admin');

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('连接数据库成功。')
})


const userSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  type: {type: String, required: true}
});

const UserModel = mongoose.model('user',userSchema); 

exports.UserModel = UserModel;