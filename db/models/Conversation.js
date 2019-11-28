const conn = require('../conn')
const {Sequelize} = conn 
const {Op} = Sequelize;

const Conversation = conn.define('conversation' , {

})

module.exports = Conversation