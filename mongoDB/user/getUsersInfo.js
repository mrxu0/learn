 /**
  * 获取总共用户数
  */
const mongo = new Mongo('localhost')
const db = mongo.getDB("admin")
const cur = db.system.users.find() // * 只能在admin数据库中才管用
print(cur.count())
print(cur.toArray()) // 打印用户列表