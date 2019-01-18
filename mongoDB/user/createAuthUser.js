const mongo = new Mongo('localhost')
let db = mongo.getDB('admin')

// 超级管理员，拥有操作所有数据库用户和操作所有数据库的权限
db.createUser({
  user: 'root',
  pwd: '123123',
  roles: ['root']
})

// 二级管理员，只负责创建数据库。不能创建用户
db.createUser({
  user: 'dbroot',
  pwd: '123123',
  roles: ['readWriteAnyDatabase', 'dbAdminAnyDatabase', 'clusterAdmin']
})

// 二级管理员，只负责创建用户。不能管理数据库
db.createUser({
  user: 'userroot',
  pwd: '123123',
  roles: ['userAdminAnyDatabase']
})
