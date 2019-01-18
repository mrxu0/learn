const mongo = new Mongo()
let db = mongo.getDB('words')
let coll = db.getCollection('word_stats')

let data = coll.findOne({word: 'new hello world'})
data.word = 'hello world'

coll.save(data)

coll.find().forEach((element) => {
    printjson(element)
})

print(coll.count())