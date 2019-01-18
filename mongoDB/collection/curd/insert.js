const mongo = new Mongo()
let db = mongo.getDB('words')
let coll = db.getCollection('word_stats')

coll.insert({word: '再次添加信数据'})

let datalist = coll.find()
printjson(coll.find())
