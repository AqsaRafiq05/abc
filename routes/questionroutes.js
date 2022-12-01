

import express from 'express';

import{ addQuestion ,getQuestions, getQuestion, editQuestion,deleteQuestion} from '../coontroller/question-controller.js';

const router = express.Router();
router.post('/addquestion',addQuestion);
router.get('/createquiz', getQuestions);
router.get('/:id', getQuestion);
router.post('/:id', editQuestion);
router.delete('/:id', deleteQuestion);


export default router;