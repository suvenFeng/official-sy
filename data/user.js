const Sequelize = require('sequelize')

const sequelize = require('./db')

module.exports = sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true
    },
    name: Sequelize.STRING(100),
    password: Sequelize.STRING,
    date: Sequelize.STRING,
    version: Sequelize.BIGINT
  },
  {
    timestamps: false,
    tableName: 'user'
  }
)