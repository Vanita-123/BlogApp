import jwt from 'jsonwebtoken';


const CreateTokenwithCookies =(usersId, res)=>{   
    try {
        const Tokenadded = jwt.sign({usersId}, process.env.JWT_TOKEN,{
            expiresIn :"15d",
        })

        res.cookies("Token" ,Tokenadded ,{
            httpOnly :true,
            secure :true,
            sameSite:"strict",
            maxAge :15
        })
        
    }
    catch (error) {
        console.log("error in generatetoken" , error.message)
        return resizeBy.status(500).json({message:"Internal Server Error"})
    }
}
export default CreateTokenwithCookies;