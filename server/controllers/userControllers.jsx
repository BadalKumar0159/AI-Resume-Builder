import bcrypt from "bcrypt"
import userModel from "../models/user.js";
import jwt from "jsonwebtoken";

// POST: /api/users/register (controller for user registration)

export const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password)
            return res.status(400).json({message: 'Missing required fields'});
        
        const user = await userModel.findOne({email});
        if(user)
            return res.status(409).json({message: 'User already exists'})

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({name, email, password: hashedPassword});

        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        newUser.password = undefined;       

        return res.status(201).json({message: 'Account created successfully', token, user:newUser})

    } catch(error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error" });
    }
}

//POST: /api/users/login (controller for user login)
export const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        
        const user = await userModel.findOne({email});
        if(!user)
            return res.status(401).json({message: 'Invalid email or password'})
        if(!user.comparePassword(password))
            return res.status(401).json({message: 'Invalid email or password'})
        
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        user.password = undefined;


        return res.status(200).json({message: 'Login successful', token, user})

    } catch(error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error" });
    }
}

//GET: /api/users/data (controller for getting user by id)
export const getUserById = async (req, res) => {
    try {
        const userId = req.userId;
        
        const user = await userModel.findById(userId).select("-password"); //fetch everything except password
        if(!user)
            return res.status(404).json({message: 'User not found'});

        return res.status(200).json({user});
    }catch(error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}