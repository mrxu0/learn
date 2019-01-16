const mongo = new Mongo()
const db = mongo.getDB('test')// 没有自动创建，
db.createCollection("newCollection") // 不添加一个集合，使用 show dbs 是查询不到的。 所以创建一个集合