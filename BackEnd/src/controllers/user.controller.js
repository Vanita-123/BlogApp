import User from "../models/user.model.js";
export const SignUp = async(req,res)=>{
try {
    const {name, email, password, confirmpassword} =req.body;
    if(password!==confirmpassword){
        return res.status(400).json({message:"password is not match please try again"});
    }
    const existUser = await User.findOne({email});
    if(existUser){
        return res.status(400).json({message:"User Already exist"})
    }
    const NewUser =new User({
        name, email, password
    }); 
    await NewUser.save();
    return res.status(201).json({
        message:"User registered successfully",
        user:{
            _id:NewUser._id,
            name:NewUser.name,
            email:NewUser.email,
        }
    });
} catch (error) {
    console.log("Error" , error);
    return res.status(500).json({message:"Server error please try again"});
} 
}

export const SignIn = async(req, res)=>{
    try {

        const {email, password} =req.body;
   const user = await User.findOne({email});


   return res.status(200).json({
    message: "User Login Sucessfully ", 
    user :{
        _id: user._id,
        email:user.email,
        password:user.password,
    }
   })
        
    } catch (error) {
        res.status(500).json({message:"Server is error please try again"})
        console.log("Error" , error);
        
    }

}