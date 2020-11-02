import express from 'express';
import usercontroller from '../controller/usercontroller';
import articlecontroller from '../controller/articlecontroller';
import duplica from '../middleware/duplication';
import val from '../middleware/validaion';
import jwtval from '../middleware/authentication';
import { checkAdmin } from '../middleware/checkadmin';
import querycontroller from '../controller/querycontrller';

const router = express.Router();

const {
    validateAdmin,
    validateSignup,
    postArticleval,
    validatequery
} = val
const {duplisign,
     articleexist
    }=duplica;
const { verijwt } = jwtval
const { signup, login, signupAdmin } = usercontroller
const {
    postArticle,
    articles,
    updateArticle,   
    onearticles,
    Removearticles,
} = articlecontroller
const {
    query,
    senquery,
    onequery,
    Deletequery

}=querycontroller

router.post("/api/signup", validateSignup,duplisign, signup);
router.post('/api/Admin',validateAdmin,verijwt,checkAdmin,duplisign,signupAdmin);
router.post('/api/login',login);
//articles routes
router.post('/api/article', postArticleval, verijwt, checkAdmin, postArticle);
router.get('/api/article', articles);
router.get('/api/article/:_id', articleexist,onearticles);
router.delete('/api/article/:_id', verijwt, checkAdmin, Removearticles);
router.put('/api/article/:_id', verijwt,updateArticle);
//query routes
router.get('/api/query',verijwt,checkAdmin,query);
router.get('/api/query/:_id',verijwt,checkAdmin, onequery);
router.post('/api/query',validatequery,senquery);
router.delete('/api/query/:_id',verijwt,checkAdmin,Deletequery);
export default router;
