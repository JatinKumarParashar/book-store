const Author = require("../models/author");
const Book = require("../models/book");

exports.addAuthor = (req, res, next) => {
  const name = req.body.name;
  Author.create({
    name: name,
  })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
      console.log("Or you have entered existing name");
    });
};

exports.getAuther = (req, res, next) => {
  Author.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.deleteAuther = (req, res, next) => {
  const id = req.params.id;
  Author.destroy({ where: { id: id } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.updateAuthor = (req, res, next) => {
  const name = req.body.name;
  const id = req.params.id;
  Author.update({ name: name }, { where: { id: id } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500), json(err);
    });
};

exports.getAllBooks = (req, res, next) => {
  const id = req.params.id;
  Book.findAll({ Where: { authorId: id } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500), json(err);
    });
};
