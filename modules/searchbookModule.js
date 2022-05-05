import { booksdb } from "../model/booksModel.js";

export const searchbooks = async (request, response) => {
    try {
        const { bookname } = request.params;
        const searchReq = await booksdb.findOne({ BookName: bookname });
        if(searchReq!==undefined){
            response.send(searchReq);
        }else{
            response.send("book not found");
        }
    } catch (error) {
        console.log("Error is:(Search book function) ", error);
    }
}