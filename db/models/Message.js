const conn = require('../conn')
const { Sequelize} = conn 

const Message = conn.define('message' , {
  text: Sequelize.STRING, 
  user: Sequelize.JSON,
  _id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  }
})

module.exports = Message