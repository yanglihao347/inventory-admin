/*
测试使用mongoose操作mongodb数据库
1.连接数据库
    1.1 引入mongoose
    1.2 连接指定数据库（URL只有数据库是变化的）
    1.3 获取连接对象
    1.4 绑定连接完成的监听（提示连接成功）
2.得到对应特定集合的Model
    2.1 定义Schema（描述文档结构）
    2.2 定义Model（与集合对应，可以操作集合）
3.通过Model或其实例对集合数据进行CRUD操作
    3.1 通过Model实例的save()添加数据
    3.2 通过Model的find()/findOne()查询多个或一个数据
    3.3 通过Model的findByIDAndUpdate()更新某个数据
    3.4 通过Model的remove()删除匹配的数据
*/

// 1.连接数据库
    // 1.1 引入mongoose
const mongoose = require('mongoose');
    // 1.2 连接指定数据库（URL只有数据库是变化的）
mongoose.connect('mongodb://localhost:27017/user_test');
    // 1.3 获取连接对象
const connection = mongoose.connection;
    // 1.4 绑定连接完成的监听（提示连接成功）
connection.on('connected', () => {
    console.log('数据库连接成功。')
})

// 2.得到对应特定集合的Model
    // 2.1 定义Schema（描述文档结构）
const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: String, required: true}
});
    // 2.2 定义Model（与集合对应，可以操作集合）
const UserModel = mongoose.model('user',userSchema);  //集合名users

// 3.通过Model或其实例对集合数据进行CRUD操作
    // 3.1 通过Model实例的save()添加数据
function testSave() {
    //创建UserModel的实例
    const userModel = new UserModel({
        username: 'aaabbb',
        password: '123',
        type: 'official'
    });
    // 调用save()保存
    userModel.save((err, doc) => {
        console.log('save()',err,doc);
    });
}
testSave();
    // 3.2 通过Model的find()/findOne()查询多个或一个数据
    // 3.3 通过Model的findByIDAndUpdate()更新某个数据
    // 3.4 通过Model的remove()删除匹配的数据



