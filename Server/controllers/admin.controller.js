import bcrypt from 'bcryptjs';
import { validationResult } from "express-validator";
import Admin from "../models/user.model.js";


export const logIn = async (request, response, next) => {
    const { email, password } = request.body;

    try {
        // Fetch the user by email
        const Admin = await User.findOne({ where: { email } });
        console.log();


        if (!user) {
            return response.status(401).json({ error: "Invalid email or password" });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return response.status(401).json({ error: "Invalid email or password" });
        }

        // If password is valid, send success response
        return response.status(200).json({ message: "Sign in success", user });
    } catch (error) {
        console.error("Error during sign-in:", error);
        return response.status(500).json({ error: "Internal Server Error" });
    }
};
export default logIn;