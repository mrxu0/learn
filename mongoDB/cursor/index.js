const mongo = new Mongo()
let db = mongo.getDB('words')
let coll = db.getCollection('word_stats')

let cur = coll.find()

// print('打印count')
// print(cur.count())

// print('打印使用了limit之后的count')
cur.forEach(element => {
    print(JSON.stringify(element)) 
 })
 
cur.limit(2)

// print(cur.count())

// print('打印使用了limit之后的size')
// print(cur.size())
cur.forEach(element => {
   print(JSON.stringify(element)) 
})

cur.skip(1)

cur.forEach(element => {
    print(JSON.stringify(element)) 
 })