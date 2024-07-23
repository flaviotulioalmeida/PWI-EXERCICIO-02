import { Router } from 'express';
import {
  listTechnologies,
  createTechnology,
  updateTechnologyDetails,
  markTechnologyStudied,
  removeTechnology,
} from '../controllers/technologyController';
import { checkExistsUserAccount } from '../middlewares/checkExistsUserAccount';

const technologyRouter = Router();

technologyRouter.get('/technologies', checkExistsUserAccount, listTechnologies);
technologyRouter.post('/technologies', checkExistsUserAccount, createTechnology);
technologyRouter.put('/technologies/:id', checkExistsUserAccount, updateTechnologyDetails);
technologyRouter.patch('/technologies/:id/studied', checkExistsUserAccount, markTechnologyStudied);
technologyRouter.delete('/technologies/:id', checkExistsUserAccount, removeTechnology);

export default technologyRouter;
