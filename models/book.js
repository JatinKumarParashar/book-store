const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Book = sequelize.define("book", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  bookName: {
    type:Sequelize.STRING,
    allowNull:false
  },
  isbn:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
  },
  authorId:{
    type:Sequelize.STRING,
    allowNull:false
  }
});


module.exports=Book;
