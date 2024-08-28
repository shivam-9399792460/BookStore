
import bcrypt from 'bcryptjs';
import { validationResult } from "express-validator";
import User from "../models/user.model.js";


export const logIn = async (request, response, next) => {
    const { email, password } = request.body;

    try {
        // Fetch the user by email
        const user = await User.findOne({ where: { email } });
        console.log(user);


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




export const ragister = async (req, res) => {
    try {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: 'Bad request', details: errors.array() });
        }

        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({ username, email, password: hashedPassword });
        console.log(user);

        return res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
        console.error('Error during sign-up:', err); // Improved logging
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};



export const getAllUser = async (req, res, next) => {
    try {
        const user = await User.findAll();
        res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.params.id } });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

