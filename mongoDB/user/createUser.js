/**
 * 创建用户
 * *AnyDatabase 凡是符合这种角色的用户都要在admin中创建
 */
const mongo = new Mongo('localhost')
let db = mongo.getDB('test')
db.createUser({
  user: "testAdmin",
  pwd: "123123",
  roles: ["dbAdmin"],
})
/* 
db.createUser({
  user: "testRead",
  pwd: "123123",
  roles: ["read"],
})

db.createUser({
  user: "testWrite",
  pwd: "123123",
  roles: ["readWrite"],
})

db = mongo.getDB("admin")

db.createUser({
  user: "testUser",
  pwd: "123123",
  roles: [
    { role: "readWrite", db: "test" }, // 为其他库创建权限  注意：这种角色在test中是查找不到的
    "read"
  ],
}) */