const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
  operatorsAliases: 0,
  port: Number(process.env.DATABASE_PORT),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const db: any = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./user.model.ts')(sequelize, Sequelize)

module.exports = db
