import mongoose from 'mongoose';
import isURL from 'validator/lib/isURL.js';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Please enter the name of the book'],
    },
    author: {
        type: String,
        trim: true,
        required: [true, 'Please enter the author name']
    },
    bookCover: {
        type: String,
        trim: true,
        required: [true, 'Please enter bookCover'],
        validate(value) {
            if (!isURL(value)) {
                throw new Error('URL is invalid');
            }
        }
  
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Please enter description']
    },
    pages: {
        type: Number,
        required: [true, 'Please enter total pages']
    },
    price: {
        type: Number,
        required: [true, 'Please enter price']
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;