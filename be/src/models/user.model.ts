module.exports = (sequelize: any, Sequelize: any) => {
  const Users = sequelize.define('user', {
    email: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    }
  })

  return Users
}
