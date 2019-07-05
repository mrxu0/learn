const mongo = new Mongo()
let db = mongo.getDB('words')
let coll = db.getCollection('word_stats')

// 删除所有的
coll.deleteMany({})

let datalist = coll.find({})
datalist.forEach(element => {
    printjson(element)
});