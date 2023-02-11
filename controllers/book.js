const Author = require("../models/author");
const Book = require("../models/book");

exports.addBook = (req, res, next) => {
  const authorId = req.body.authorId;
  const bookName = req.body.bookName;
  const ISBN = req.body.isbn;
  Book.create({
    bookName: bookName,
    isbn: ISBN,
    authorId: authorId,
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

exports.getBook = (req, res, next) => {
  Book.findAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.deleteBook = (req, res, next) => {
  const id = req.params.id;
  Book.destroy({ where: { id: id } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.updateBook = (req, res, next) => {
  const authorId = req.body.authorId;
  const bookName = req.body.bookName;
  const ISBN = req.body.isbn;
  const id = req.params.id;
  Book.update(
    { bookName: bookName, isbn: ISBN, authorId: authorId },
    { where: { id: id } }
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500), json(err);
    });
};


exports.getAuthor=(req,res,next)=>{
const id=req.params.id;
Book.findByPk(id).then(data=>{
    console.log(data.dataValues.authorId);
    Author.findByPk(data.dataValues.authorId).then(data=>{
        res.status(201).json(data);
    }).catch(err=>{
        res.status(501).json(err);
    })
})
.catch(err=>{
    res.status(500).json(err);
})
}