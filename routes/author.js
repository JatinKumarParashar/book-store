const express = require('express');
const authorControllers=require('../controllers/author');
const router = express.Router();

router.post('/',authorControllers.addAuthor);
router.get('/',authorControllers.getAuther);
router.delete('/:id',authorControllers.deleteAuther);
router.patch("/:id",authorControllers.updateAuthor);
router.get('/:id',authorControllers.getAllBooks);


module.exports=router;