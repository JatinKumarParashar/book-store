const express = require("express");
const bodyParsed = require("body-parser");
const cors = require("cors");

// Dotenv
const dotenv = require("dotenv");
dotenv.config();

// Database
const sequelize = require("./util/database");

const app = express();

// cors
app.use(cors());

app.use(bodyParsed.json());
app.use(bodyParsed.urlencoded({ extended: true }));

// Routes
const authorRoutes = require("./routes/author");
const bookRoutes = require("./routes/book");

// Models
const Author = require("./models/author");
const Book = require("./models/book");

app.use("/author", authorRoutes);
app.use("/book", bookRoutes);

// Database sync and server listen port
sequelize.sync().then(() => {
  //MOdels Relationship
  Author.hasMany(Book, { onDelete: "CASCADE" });
  Book.belongsTo(Author);

  app.listen(4000, () => {
    console.log("server is running on 4000");
  });
});
