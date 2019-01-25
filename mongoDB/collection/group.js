const mongo = new Mongo()
let db = mongo.getDB('words')
let coll = db.getCollection('word_stats')

coll.group({
    // 必填 字段或要分组的字段。返回一个“键对象”作为分组键使用。
    key: { 
        qty: 1, 
        item: 1
    }, 
    // 必填 
    reduce: function(obj, prev) {
        prev.count++;
    },
    // 必填
    initial: {
        count: 0,
        price: 10
    },
    
    cond: {
        qty: { $gt: 75 }
    },
    finalize: function (result){
        result.sum = result.price * result.count
    }
})