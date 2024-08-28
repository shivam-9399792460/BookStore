import express from "express";
import { body } from "express-validator";
import { addBook, deleteBook, getBookById, getBooks, updateBook } from "../controllers/book.controller.js";

const router = express.Router();
router.post("/book", [
    body("title", "Title name  is requires").notEmpty(),
    body("author", "Author name requires required").notEmpty(),
    body("publication_year", "category is required").notEmpty(),
    body("price", "book price is required").notEmpty(),
    body("description", "description is required").notEmpty(),
    body("image", "image is required").notEmpty()

], addBook);
router.get("/books", getBooks);
router.get("/book/:id", getBookById);
router.put("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);


export default router;