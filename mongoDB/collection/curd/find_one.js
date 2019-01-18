/**
 * 查找单条数据
 */
const mongo = new Mongo()
let db = mongo.getDB('words')
let coll = db.getCollection('word_stats')
let data = coll.findOne()

printjson(data)