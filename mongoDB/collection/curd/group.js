const mongo = new Mongo()
let db = mongo.getDB('words')
let coll = db.getCollection('word_stats')

let datalist = coll.find({word: 'new hello world'})

let groupResults = coll.group({
    key: { word: 'new hello world' },
    // cond: {word: 'new hello world'},
    initial: { count: 0},
    reduce: (obj, prev) => { prev.count++ }
})
groupResults.forEach(element => {
    print(JSON.stringify(element))
});