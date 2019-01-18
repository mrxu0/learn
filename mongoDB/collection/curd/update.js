const mongo = new Mongo()
let db = mongo.getDB('words')
let coll = db.getCollection('word_stats')

/**
 * mycoll.update(query, update, upsert, multi)
 * 参数1：query对象
 * 参数2：update对象
 * 参数3：当对象不存在时插入
 * 参数4：为true时只修改匹配的第一个参数
 */
// 查找不到word是hello worldd时插入新的数据
 coll.update({word: 'hello worldd'}, { $set: { word: 'MrXu' } }, true, false)

 // 修改所有的word是hello worldd数据,将所有的
 coll.update({word: 'hello worldd'}, { $set: { word: 'MrXu' } }, false, true)

coll.find().forEach((element) => {
    printjson(element)
});