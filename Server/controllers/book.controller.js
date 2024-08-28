

import { v2 as cloudinary } from 'cloudinary';

import Book from '../models/book.model.js';

// Cloudinary configuration
cloudinary.config({
    cloud_name: 'dr4wt6xk5',
    api_key: '239659512293389',
    api_secret: 'vMBmclITAiosryyi2MdtKCX_JJE'
});


export const addBook = async (req, res) => {
    try {
        // Check if file was uploaded

        const file = req.files.image;
        console.log(file);

        console.log(file);
        if (!req.files || !req.files.image) {
            return res.status(400).json({ msg: "No image file uploaded" });
        }



        // Upload image to Cloudinary
        let result;
        try {
            result = await cloudinary.uploader.upload(file.tempFilePath);
            console.log(result);

            if (!result || !result.url) {
                throw new Error("Cloudinary upload failed or returned an invalid response");
            }
        } catch (err) {
            console.error("Error uploading to Cloudinary:", err.message);
            return res.status(500).json({ msg: "Cloudinary upload failed", error: err.message });
        }

        // Validate request body
        const { title, author, publication_year, price, description } = req.body;
        if (!title || !author || !publication_year || !price || !description) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        // Create a new book entry
        const newBook = await Book.create({
            title,
            author,
            publication_year,
            price,
            description,
            image: result.url, // Save the image URL from Cloudinary
        });


        res.json(newBook);
    } catch (err) {
        console.error("Server error:", err.message);
        res.status(500).send('Server error');
    }
};


// Get all books
export const getBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get a book by ID
export const getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).send({ message: 'Book not found' });
        }
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a book
export const updateBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, author, publication_year, price, description } = req.body;
        let book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }

        if (req.files && req.files.image) {
            const file = req.files.image;
            const result = await cloudinary.uploader.upload(file.tempFilePath);
            book.image = result.url;
        }

        const fields = { title, author, publication_year, price, description };
        for (const key in fields) {
            if (fields[key]) {
                book[key] = fields[key];
            }
        }
        await book.save();
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Delete a book
export const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }

        await book.destroy();
        res.json({ msg: 'Book removed' });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};