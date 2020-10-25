import express from 'express';
import usercontroller from '../controller/usercontroller';
import articlecontroller from '../controller/articlecontroller';
import val from '../middleware/validaion';
import jwtval from '../middleware/authentication';
import { checkAdmin } from '../middleware/checkadmin';

const router = express.Router();

const {
    validateSignup,
    postArticleval
} = val
const { verijwt } = jwtval
const { signup, login } = usercontroller
const {
    postArticle,
    articles,
    updateArticle,
    commentarticle,
    onearticles,
    Removearticles,
} = articlecontroller

router.post("/api/signup", validateSignup, signup);
router.post('/api/login', login);
//articles
router.post('/api/article', postArticleval, verijwt, checkAdmin, postArticle);
router.get('/api/article', articles);
router.get('/api/article/:_id', onearticles);
router.delete('/api/article/:_id', verijwt, checkAdmin, Removearticles);
router.put('/api/article/:_id', verijwt,updateArticle);

export default router;
