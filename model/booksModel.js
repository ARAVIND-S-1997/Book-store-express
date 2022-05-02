// importing packages and libraries

import mongoose from "mongoose";
// schema import mongoose from "mongoose";

const schema = mongoose.Schema;

export const bookSchema = new schema({
    BookName: {
        type: String,

    },
    Author: {
        type: String,

    },
    Description: {
        type: String,

    },
    Language: {
        type: String,
    },
    Publisher: {
        type: String,

    },
    Imageurl: {
        type: String
    },
    Price: {
        type: String
    },
    Available: {
        type: String
    },
    PublicationDate: {
        type: String
    },
    Rating: {
        type: String
    },
    Genre: {
        type: String
    },

})
// model
export const booksdb = mongoose.model("mybooks", bookSchema);