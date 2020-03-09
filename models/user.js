'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model {
    static associate(models) {
      User.hasMany(models.Task)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Username cannot be empty'
      },
      validate: {
        len: {
          args: [1],
          msg: 'Username cannot be empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Email cannot be empty'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Email must contain email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Password cannot be empty'
      },
      validate: {
        len: {
          args: [5],
          msg: 'Password cannot less than 5 characters'
        }
      }
    }
  }, {
    sequelize
  })
  return User;
};