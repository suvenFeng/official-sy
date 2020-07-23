
const sequelize = require('./db')

const User = require('./user')

exports.getUser = async name => {
  return await User.findOne(
    {
      where: {
        name
      }
    }
  )
}


exports.getBanner = async () => {
  return [
    {
      url: 1
    }
  ]
}