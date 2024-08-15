import express from 'express';
import { signupUser, loginUser } from '../controller/user-controller.js';
import { askQuestion } from '../controller/question-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';
import { getAllQuestions } from '../controller/question-controller.js';
const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);

router.post('/ask', authenticateToken, askQuestion);
router.get('/posts', getAllQuestions)

export default router;