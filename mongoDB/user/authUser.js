/**
 * 登录，和退出账户
 * 必须开启了认证才可以登录
 * 必须先跳转到用户对应的数据库中才可以进行登录退出操作
 */
const mongo = new Mongo('localhost')
const db = mongo.getDB('test')
db.auth("testAdmin", '123123')
db.logout()