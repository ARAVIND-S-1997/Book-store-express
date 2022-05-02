import{booksdb} from "../model/booksModel.js"

// get all books
export const allbooks=(async ( request,response) => {
    const Books = await booksdb.find({});
    return response.send({ message: "Book are", Books });

});
