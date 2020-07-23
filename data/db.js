const Sequelize = require('sequelize')

const config = require('../config')

const { database, user, password, host, port } = config.mysql

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  query: { raw: true }
})

sequelize.authenticate().then(
  () => {
    console.log('mysql Success.')
  }
).catch(
  err => {
    console.error('mysql Failed', err)
  }
)

module.exports = sequelize