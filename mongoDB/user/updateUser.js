const mongo = new Mongo('localhost')
const db = mongo.getDB('test')

db.updateUser(
  "testAdmin",
  {
    roles: [
      { role: "readWrite", db: "test" }
    ],
    pwd: "password"
  }
)