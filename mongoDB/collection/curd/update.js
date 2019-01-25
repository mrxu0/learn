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
/* coll.updateOne( {word: '再次添加信数据', arr: 7 }, { 
    // 设置新的值
    //  $set: { word: 'MrXu', size: 10 }, 
    // 自增值  非数字类型不生效
    // $inc: { status: 3 }, 
    // 将原有字段命名为新的值
    //  $rename: { new_arr: 'arr'},
    // 往数组里新增元素 如果同名,只能添加最后一个。一次性添加多个需要使用$each限定符
    //  $addToSet: { arr: 'arr 4', arr: 'arr 5'}
    // $addToSet: { arr: {$each:  ['arr 5', 'arr 6', '7', '8'] } },
    // 删除书中中的值，1删除最后一个, -1删除第一个
    // $pop: { arr: 2 }
    // 删除数组中符合 query 条件的对象
    // $pull: { arr: {  $regex: 'M', $in: [ 'MrXu' ] } }
    // 跟$addToSet的不同是可以重复添加
    // $push: { arr: { $each: [ 1, 2, 3 ] } }
    // $slice 用于$push的限定符，规定数组的长度,不能单独使用
    // $push: { arr: { $each: [ 4, 5, 6 ], $slice: 8 } }
    // $sort 用于$push的限定符，规定数组的排序, 1 从小到大， -1 从大到小
    // $push: { arr: { $each: [ 7 ], $sort: -1 } }
    // $[] 充当占位符，更新与查询文档匹配的数组中的所有元素
    // $set: { 'arr.$[]': 5 }
    // $ 充当占位符
    // $set : { 'arr.$': 8 }
}, false, false) */

coll.update( { word: '再次添加信数据' }, {
    $set: { word: '干得漂亮' }
})

 // 修改所有的word是hello worldd数据,将所有的
//  coll.update({word: 'hello worldd'}, { $set: { word: 'MrXu' } }, false, true)
let cur = coll.find()
cur.forEach((element) => {
    printjson(element)
    // printjson(element.arr.length)
})