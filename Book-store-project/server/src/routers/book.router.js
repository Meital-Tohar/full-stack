import Express from 'express';
import * as bookController from '../controllers/book.controller.js'


const router = new Express.Router();


router.post('/books/new',bookController.createBook);

router.get('/books/', bookController.getBooks);

router.get('/books/:bookID', bookController.getBook);

export default router;
