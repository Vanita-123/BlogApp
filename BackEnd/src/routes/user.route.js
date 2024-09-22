import express from 'express'
import { SignIn, SignUp } from '../controllers/user.controller.js';


const router = express.Router();
router.post('/Signup',SignUp) 
router.post("/Signin" ,SignIn)
export default router;         