/**
 * 删除用户
 */
const mongo = new Mongo('localhost')
const db = mongo.getDB('myTest')
// db.removeUser('testRead') // 已经废除,建议使用下面的方法
db.dropUser('testWrite')
db.dropUser('testRead')
db.dropUser('testAdmin')