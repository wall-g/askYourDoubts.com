import express from 'express'
import { signupUser, loginUser } from '../controller/user-controller.js';
// import { askQuestion } from '../controller/question-controller.js';
const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);

// router.post('/ask', askQuestion)

export default router;