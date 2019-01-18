let pretty = (msg, cursor) => {
    print(msg)
    let words = cursor.map(item => item.word)
    let wordStr = JSON.stringify(words)
    // printjson(wordStr)
    if (wordStr.length > 65) wordStr = wordStr.slice(0, 50) + '......'
    print(wordStr)
}


const mongo = new Mongo()
let db = mongo.getDB('words')
let coll = db.getCollection('word_stats')
let cur = coll.find({ first: { $in: ['a', 'b', 'c'] } })
pretty('打印first含有a, b or c的:', cur)

cur = coll.find({ size: { $gt: 12 } })
pretty('打印size大于12的:', cur)

cur = coll.find({ size: { $mod: [2, 0] } })
pretty('打印处以2余数为0的:', cur)

cur = coll.find({ letters: { $size: 12 } })
pretty('打印letters长度为12的:', cur)

cur = coll.find({
    $and: [
        { first: { $in: ['a', 'e', 'i', 'o', 'o'] } },
        { last: { $in: ['a', 'e', 'i', 'o', 'o'] } },
    ]
})
pretty('first和last包含a e i o o的:', cur)

cur = coll.find({ 'stats.vowels': { $gt: 6 } })
pretty('stats.vowels大于6的:', cur)

cur = coll.find({ 'stats.vowels': { $gt: 6 } })
pretty('stats.vowels大于6的:', cur)

cur = coll.find({
    $and: [
        { first: { $in: ['l'] } },
        { last: { $in: ['t'] } },
        { size: { $size: 4 } }
    ]
})
pretty('首字母为l，最后一个字母为t，且长度为4:', cur)