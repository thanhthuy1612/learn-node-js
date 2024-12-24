const User = require('~/models/user.model')

const getAllUsers = async () => {
  const result = await User.find()
  return result
}

const createUser = async (email: string, name: string, city: string) => {
  const result = await User.create({ email, name, city })
  return result
}

const updateUser = async (id: string, email: string, name: string, city: string) => {
  const result = await User.updateOne({ _id: id }, { email, name, city })
  return result
}

const getUserById = async (id: string) => {
  const result = await User.findById(id)
  return result
}

const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id)
  return result
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
}
