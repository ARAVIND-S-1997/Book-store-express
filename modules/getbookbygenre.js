// file imports
import { booksdb } from "../model/booksModel.js";

// get book genre function
export const booksbygenre = (async (request, response) => {
    const { id } = request.params;
    console.log(id)

    // get books by genre
    const getBooksData = await booksdb.find({ Genre: id });
    console.log(getBooksData);
    response.send(getBooksData);
});
