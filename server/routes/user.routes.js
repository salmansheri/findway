import express from 'express'; 
import userModel from '../models/userModel.js';


const router = express.Router(); 

/* Get All user */

router.route("/login").post(async (req, res) => {
    try {
        const { email, password } = req.body; 
        const User = await userModel.findOne({email: email});
        if(User) {
            if(User.password=== password) {
                res.status(200).json({message: "success"}); 
                console.log("success")


            }
        } else {
            res.status(404).json({message: "User not found!"})
        }
    
        

         
    } catch(err) {
        res.status(500).json({message: err})
        console.log(err)
    }
}); 

router.route("/register").post(async (req, res) => {
    try {
        const {username, email, password, dateofbirth} = req.body; 
        const newUser = await userModel.create({
            username, 
            email, 
            password, 
            dateofbirth, 

        }); 

      if(newUser) {
        res.status(200).json({newUser})
        console.log("User created successfully")
      }
    } catch(err) {
        res.status(500).json({message: err})
        console.log(err)
    }
}); 

export default router; 


