import BooksModel from "../models/BooksModel.js";
import dotenv from "dotenv";

dotenv.config()

const addBook = async (req,res)  =>{
    const {book_name,book_url,author,rating,price,discription,date} = req.body
    try{
        const Book = await BooksModel.findOne({book_name})

        if (Book){
            return res.status(400).json({message:"Book is already present"})
        }
        const newBook = await BooksModel.create({
            book_name,
            book_url,
            author,
            rating,
            price,
            discription,
            date,
        });
        res.status(200).json({message:"Book added Successfully"})
    }catch{
        res.status(500).json({message:"error to add book"})
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await BooksModel.find();  // 🔹 Fetch all books
        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Error fetching books", error: error.message });
    }
};

export {addBook,getAllBooks};