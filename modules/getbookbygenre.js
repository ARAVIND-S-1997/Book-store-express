
import { booksdb } from "../model/booksModel.js";

// get book genre
export const booksbygenre = (async (request, response) => {
    const { id } = request.params;
    console.log(id)
    const getBooksData = await booksdb.find({ Genre:id });
    console.log(getBooksData);
    response.send(getBooksData);
});
