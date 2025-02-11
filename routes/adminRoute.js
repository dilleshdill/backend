import adminLogin from "../controllers/adminController.js";
import {addBook,getAllBooks,getBook} from "../controllers/BooksController.js";
import express from "express";

const adminRoute = express.Router();

// Corrected route
adminRoute.post('/login', adminLogin);
// Corrected route
adminRoute.post('/add-book', addBook);
adminRoute.get('/book',getAllBooks)
adminRoute.get('/book-details/:_id',getBook)

export default adminRoute;
