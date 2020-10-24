import express from 'express';
import usercontroller from '../controller/usercontroller';
import articlecontroller from '../controller/articlecontroller';
import val from '../middleware/validaion';

const router = express.Router();

router.post("/api/signup", val.validateSignup, usercontroller.signup);
router.post('/api/login', usercontroller.login);
router.post('/api/article', val.postArticleval, articlecontroller.postArticle);
export default router;
