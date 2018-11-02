const bookshelf = require('./bookshelf')

const Contacts = bookshelf.Model.extend({
  tableName: 'contacts',
  created_by: function () {
    return this.belongsTo(users, "users_id")
  },
  idAttribute: 'id',
  hasTimestamps: true
})

module.exports = Contacts