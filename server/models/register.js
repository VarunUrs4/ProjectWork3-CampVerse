const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name:String,
    email:String,
    usn:String,
    password:String,
    dept:String,
    semester:Number,
    year:Number,
    section:String,
    phone:Number,
    personalEmail:String,
    joiningYear:Number,
    passingYear:Number,
    cgpa:Number,
    proctor:String,
    achievements:String,
    clubs:String,
    tokens:[{
        token:{
            type:String,
            required:true,
        }
    }]
})

studentSchema.pre('save', async function(next){
    // console.log("hi i am hashing");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
    }
    next();
})

studentSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRETKEY);
        // console.log("hi",token);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model('Students',studentSchema);
module.exports = User;