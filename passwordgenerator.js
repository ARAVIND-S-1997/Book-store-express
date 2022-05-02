import bcrypt from "bcrypt";

export async function generatePassword(password) {
    console.log(password)
    const noOfRounds = 5;
    const salt = await bcrypt.genSalt(noOfRounds);
    console.log(salt)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword;
}
