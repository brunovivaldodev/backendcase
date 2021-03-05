import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const testeRouter = Router();

testeRouter.get('/', ensureAuthenticated, (req, res) => {
  console.log(req.user);
  return res.json({ ok: true });
});
export default testeRouter;
