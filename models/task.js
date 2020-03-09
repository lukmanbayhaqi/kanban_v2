'use strict';
module.exports = (sequelize, DataTypes) => {
  class Task extends sequelize.Sequelize.Model {
    static associate(models) {
      Task.belongsTo(models.User)
      Task.belongsTo(models.Category)
    }
  }
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Title cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          msg: 'Title cannot be empty'
        }
      }
    },
    UserId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize
  })
  return Task;
};