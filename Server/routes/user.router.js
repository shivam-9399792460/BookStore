import express from "express";
import { body } from "express-validator";
import { getAllUser, getUser, logIn, ragister } from "../controllers/user.controller.js";




const router = express.Router();

// Signup Route
router.post(
    "/ragister",
    [
        body("username", "Username is required").notEmpty(),
        body("email", "Email ID is required").notEmpty(),
        body("email", "Email ID is incorrect").isEmail(),
        body("password", "Password is required").notEmpty(),
        body("password", "Password must have at least 4 characters").isLength({ min: 4 })
    ],
    ragister
);

//SignIn
router.post("/login", logIn);

//Get All User
router.get('/getuser', getAllUser);

//Get User from Id
router.get('/getuser/:id', getUser);



export default router;
