/**
 * 查找单条数据
 */
const mongo = new Mongo()
let db = mongo.getDB('words')
let coll = db.getCollection('word_stats')
let datalist = coll.find({
    arr: { $regex: 'M*'}
})
datalist.forEach(element => {
    print(element.word)    
});
