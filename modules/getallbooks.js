// file imports
import { booksdb } from "../model/booksModel.js"

// get all books function
export const allbooks = (async (request, response) => {
    // get all books
    const Books = await booksdb.find({});
    return response.send({ message: "Book are", Books });

});
