const mongo = new Mongo()
const db = mongo.getDB('test')// 没有自动创建
db.dropDatabase()