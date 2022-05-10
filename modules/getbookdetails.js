// file imports
import { booksdb } from "../model/booksModel.js";


// get books details  function
export const bookdetail = (async (request, response) => {
    const { id } = request.params;
    console.log(id)
    // get book details
    const reqData = await booksdb.findOne({ _id: id });
    response.send(reqData);
});
