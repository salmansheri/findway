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
                res.status(200).json(User); 
                console.log("success")


            }
        } else {
            res.status(200).json({message: "User not found!"})
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

router.route("/").get(async (req, res) => {
    try {
        const users = await userModel.find({}); 
        res.status(200).json(users)

    } catch(err) {
        res.status(500).json({message: err})
        console.log(err); 
    }
})

router.route("/:id").get(async (req, res) => {
    try {
        const {id} = req.params; 
        const user = await userModel.findById({_id: id}); 
        
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(200).json({message: "user not found"})
        }

    } catch(err) {
        res.status(500).json({message: err})
        console.log(err)
    }
})

router.route("/:id").delete(async (req, res) => {
    try {
        const {id} = req.params; 
        const user = await userModel.findByIdAndDelete({_id: id}); 
        res.status(204).json(`User with id:  ${id} deleted successfully`)
        console.log("deleted successfully")

    } catch(err) {
        res.status(500).json({message: err})
        console.log(err)
    }
})

export default router; 


