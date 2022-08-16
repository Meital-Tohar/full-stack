
import Book from '../models/book.model.js';

export const createBook = async (req, res) => {
    const bookData = req.body;

    const book = new Book (bookData);

    try {
        await book.save();

        res.status(201).send({
            status:201,
            statusTaxs: 'Created',
            data: { bookData: bookData },
            message: 'Book was created succefully',
        })

    } catch (err) {
        console.log(err);
        res.status(400).send({
            status: 400,
            statusTaxt: 'Bad Request',
            message: '',
        });
    }
}

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.send({
            status: 200,
            statusText: 'Ok',
            data: { books: books },
            message: '',
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: '',
        });
    }
};


export const getBook = async (req, res) => {
    const bookID = req.params.bookID;
    if (!bookID) {
        return res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            message: '',
        });
    }

    try {
        const book = await Book.findById(bookID);
        if (!book) throw new Error();

        res.send({
            status: 200,
            statusText: 'Ok',
            data: { book: book },
            message: '',
        });
    } catch (err) {
        res.status(500).send({
            status: 500,
            statusText: 'Internal Server Error',
            message: '',
        });
    }
};
