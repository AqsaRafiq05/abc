import express from 'express';

import{ addSubPool, getSubPools, getSubPool, editSubPool,deleteSubPool} from '../coontroller/Subpool-controller.js';

const router = express.Router();

router.post('/Subpool', addSubPool);
router.get('/viewpool', getSubPools);
router.get('/:id', getSubPool);
router.post('/:id', editSubPool);
router.delete('/:id', deleteSubPool);
export default router;