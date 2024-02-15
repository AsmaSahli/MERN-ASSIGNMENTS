const User=require("../models/User");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
const secretKey=process.env.SECRET_KEY

module.exports={
    register: async(req,res)=>{
        try{
            const potentialUser=await User.findOne({email:req.body.email})
            if (potentialUser){
                res.status(400).json({message:'User already registered'})
            }
            else {
                const newUser=await User.create(req.body)
                const userToken = jwt.sign({_id:newUser._id,email:newUser.email},secretKey,{expiresIn:'2h'})
                res.status(201).cookie('userToken',userToken,{ httpOnly: true, maxAge: 2 * 60 * 60 * 1000, sameSite: 'None', secure: true}).json(newUser)
            }
        }
        catch(err){
            console.log(err)
            res.status(400).json({error:err})
        }

    },
    

    login: async (req, res) => {
        try {
            const user =await User.findOne({email:req.body.email})
            if(user){
                const passMatch =await bcrypt.compare(req.body.password,user.password)
                if(passMatch){
                    const userToken=jwt.sign({_id: user._id,email:user.email},secretKey,{expiresIn:'2h'})
                    res.status(201).cookie('userToken',userToken,{ httpOnly: true, maxAge: 2 * 60 * 60 * 1000, sameSite: 'None', secure: true}).json(user)
                }
                else {
                    res.status(400).json({message:'Invalid Credentials'})
                }
            }
            else {
                res.status(400).json({message:"Invalid Credentials"})
            }

        } 
        catch(err){
            res.status(400).json({error:err})
        }
        
    },

    logout: (req, res) => {
        res.clearCookie('userToken')
        res.status(200).json({message:'Logged out Successfully'})

    },

    findAllUsers:( req,res)=>{
        User.find()
        .then((allUsers) => res.status(200).json(allUsers))
        .catch((err) => {res.status(400).json(err)})

    }

    
    
    
}