import { booksdb } from "../model/booksModel.js";


// get books details 
export const bookdetail = (async (request, response) => {
    const { id } = request.params;
    console.log(id)
    const reqData = await booksdb.findOne({ _id: id });
    response.send(reqData);
});
