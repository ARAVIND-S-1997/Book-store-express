// importing packages and libraries

import mongoose from "mongoose";

const schema = mongoose.Schema;

// schema
export const signupSchema = new schema({
    firstname: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true
    },
    lastname: {
        type: String,
        minLength: 1,
        maxlength: 20,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    emailid: {
        type: String,
        minLength: 11,
        maxlength: 30,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
    },
    addressinfo: {
        name: {

            type: String,
        },
        address: {

            type: String,
        },
        district: {

            type: String,
        },
        state: {

            type: String,
        },
        pincode: {

            type: Number,
        },
        landmark: {

            type: String,
        },
        contactno: {

            type: Number,
        },
        alternativeno: {

            type: Number,
        }
    },
    cart: [
        {
            BookName: {
                type: mongoose.ObjectId,
                ref: "mybooks"
            },
            Quantity: {
                type: Number
            }
        }
    ]
})

// model
export const userdb = mongoose.model("users", signupSchema)