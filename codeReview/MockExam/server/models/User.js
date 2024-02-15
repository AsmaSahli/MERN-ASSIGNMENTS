const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const {isEmail}=require('validator');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,"{PATH} is required"]
    },
    email:{
        type : String,
        required: [true,"{PATH} is required"]
    },
    password:{
        type : String,
        required: [true,"{PATH} is required"],
        minlength:[8,"{PATH} must be at least 8 characters long "]
    },


}, { timestamps: true });

UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set(value=>this._confirmPassword=value)

UserSchema.pre('validate', function(next){
    if(this.password !==this.confirmPassword){
        this.invalidate(" confirmPassword", "Password and Confirm Password must match !" )
    }
    next();
})

UserSchema.pre('save',function(next){
    bcrypt.hash(this.password,10)
        .then(hash=>{
            this.password=hash;
            next();
        })
})


const User = mongoose.model("User", UserSchema);

module.exports = User;
