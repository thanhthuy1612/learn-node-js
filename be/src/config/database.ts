import mysql, { ConnectionOptions } from 'mysql2'

const access: ConnectionOptions = {
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0
}

const connection = mysql.createPool(access)

module.exports = connection
