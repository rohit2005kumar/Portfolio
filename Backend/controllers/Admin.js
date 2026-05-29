import { json } from "stream/consumers";
import adminModel from "../Models/admin.js";
import jwt from 'jsonwebtoken'
import blackListTokenModel from "../Models/blackListToken.js";
import { Project } from "../Models/Projects.js";


export const loginController = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await adminModel.findOne({ username })
        if (!user) return res.status(404).json({ message: "user not found" });
        const isMatch = await user.comparePassword(password)
        if (!isMatch) return res.status(300).json({ message: "wrong password" })
        const token = jwt.sign({ username, iat: Date.now() }, process.env.SECRET, { expiresIn: '1h' })
        // console.log(token)
        res.cookie('token', token, { httpOnly: true, maxAge: 60 * 60 * 1000 })
        return res.status(200).json({ message: "logged in" })


    } catch (error) {
        res.status(500).json({ message: error.message })

    }


}
export const signupcontroller = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = await adminModel.findOne({ username });

        if (user) return res.status(409).json({ message: "user already exist" })
        const newUser = new adminModel({ username, password, email })
        await newUser.save()
        console.log(newUser)
        res.status(200).json({ message: "userd added" })
    } catch (error) {
        // console.log(error)
        res.status(500).json({ message: error.message })

    }

}

export const getUserInfo = async (req, res) => {
    try {
        const token = req.cookies.token
        if (!token) return res.status(404).json({ message: "token not found" })
        // const authHeader=req.headers.authorization
        // const token =authHeader.split(' ')[1]
        const user = await jwt.verify(token, process.env.SECRET)
        res.status(200).send(user)
    } catch (error) {
        // console.log(error)
        res.status(500).json({ message: error.message })
    }
}
export const logout = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(400).json({ message: 'No token found' })

        }
        await blackListTokenModel.create({ token })
        const c = res.clearCookie("token")
        res.status(200).json({ message: "logout Sucessfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}
