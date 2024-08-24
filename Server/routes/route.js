import express from 'express';
import { signupUser, loginUser } from '../controller/user-controller.js';
import { askQuestion } from '../controller/question-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';
import { getAllQuestions } from '../controller/question-controller.js';
import { getQuestionById } from '../controller/question-controller.js';
import { addComment } from '../controller/comment-controller.js';
import { getAllComments } from '../controller/comment-controller.js';
import { addAnswer, getAllAnswers } from '../controller/answer-controller.js';
const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);

router.post('/ask', authenticateToken, askQuestion);
router.get('/posts', authenticateToken, getAllQuestions);
router.get('/post/:id', authenticateToken, getQuestionById);

router.post('/addComment', authenticateToken, addComment);
router.get('/comments/:id', authenticateToken, getAllComments);

router.post('/addAnswer', authenticateToken, addAnswer);
router.get('/answers/:id', authenticateToken, getAllAnswers);

export default router;