import express from 'express';
import{ addPool, getPools, getPool, editPool,deletePool} from '../coontroller/pool-controller.js';
import{ addQuestion} from '../coontroller/question-controller.js';
import{ addSubPool, getSubPools, getSubPool, editSubPool,deleteSubPool} from '../coontroller/Subpool-controller.js';
import{ addQuiz, getQuizzes, getQuiz, editQuiz,deleteQuiz} from '../coontroller/addquiz-controller.js';
const router = express.Router();
router.post('/addnewpool', addPool);
router.get('/questionpool', getPools);
router.get('/:id', getPool);
router.post('/:id', editPool);
router.delete('/:id', deletePool);







export default router;
