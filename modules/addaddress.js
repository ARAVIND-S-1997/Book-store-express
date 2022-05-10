// file imports
import { userdb } from "../model/signupModel.js";

// packages imports
import jwt from "jsonwebtoken";


//  add address function
export const addaddress = (async (request, response) => {
    try {
        const { emailid, token } = request.headers;
        console.log("Token (Add address function):", token);
        console.log("Email id (Add address function):", emailid);

        const { name, contactno, pincode, address, district, state, landmark, alternativeno } = request.body;
        console.log("Name (Add address function):", name);
        console.log("Address (Add address function):", address);
        console.log("District (Add address function):", district);
        console.log("State (Add address function):", state);
        console.log("Pincode (Add address function):", pincode);
        console.log("Landmark (Add address function):", landmark);
        console.log("Contact no(Add address function):", contactno);
        console.log("Alternative contact no(Add address function):", alternativeno);

        const verify = jwt.verify(token, process.env.SECRET_KEY);
        if (verify) {

            // add address
            const adddata = await userdb.updateOne({ emailid: emailid },
                {
                    $set: {
                        addressinfo: {
                            name: name, address: address, district: district, state: state, pincode: pincode, landmark: landmark, contactno: contactno, alternativeno: alternativeno
                        }
                    }
                }
            );
            return response.send({ message: "successfull" });
        }
        else {
            return response.send({ message: "Invalid token" });
        }
    } catch (error) {
        console.log("Error is(Add address function):", error);
    }

});
