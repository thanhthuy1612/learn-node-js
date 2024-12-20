const connection = require('~/config/database')

const getAllUser = async () => {
  const [result, _field] = await connection.query('SELECT * FROM Users u')
  return result
}

const createUser = async (email: string, name: string, city: string) => {
  const [result, _field] = await connection.query(
    `INSERT INTO 
    Users (email, name, city) 
    VALUES (?, ?, ?)`,
    [email, name, city]
  )
  return result
}

const updateUser = async (id: string, email: string, name: string, city: string) => {
  const [result, _field] = await connection.query(
    `UPDATE Users
    SET email = ?, name = ?, city = ?
    WHERE id = ?`,
    [email, name, city, id]
  )
  return result
}

const findUserById = async (id: string) => {
  const [result, _field] = await connection.query(
    `SELECT * FROM Users
    WHERE id = ?`,
    [id]
  )
  const user = result && result.length ? result[0] : {}
  return user
}

const deleteUser = async (id: string) => {
  const [result, _field] = await connection.query(
    `DELETE FROM Users
    WHERE id = ?`,
    [id]
  )
  return result
}

module.exports = {
  getAllUser,
  createUser,
  findUserById,
  updateUser,
  deleteUser
}
