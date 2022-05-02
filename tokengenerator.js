import jwt from "jsonwebtoken"

export async function token(value){
    const gentoken=await jwt.sign(value,process.env.SECRET_KEY)
    return gentoken
}
