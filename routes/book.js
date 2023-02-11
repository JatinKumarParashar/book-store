const express = require("express");
const BookControllers = require("../controllers/Book");
const router = express.Router();

router.post("/", BookControllers.addBook);
router.get("/", BookControllers.getBook);
router.delete("/:id", BookControllers.deleteBook);
router.patch("/:id", BookControllers.updateBook);
router.get('/:id',BookControllers.getAuthor);
module.exports = router;
