import express from 'express';
import usercontroller from '../controller/usercontroller';
import articlecontroller from '../controller/articlecontroller';
import querycontroller from '../controller/querycontrller';
const router = express.Router();

router.post("/api/signup",usercontroller.createUser );
router.get('/api/users', usercontroller.getUser);
router.post('/api/login',usercontroller.getoneUser);
//article Routes
router.post('/api/postarticle',articlecontroller.createarticle);
router.get('/api/article',articlecontroller.getArticles);
router.get('/api/article/:_id',articlecontroller.getoneArticle);
router.put('/api/article/:_id',articlecontroller.updatearticle);
router.delete('/api/article/:_id',articlecontroller.deletearticle);
//queries
router.post('/api/query',querycontroller.createquery);
router.get('/api/query',querycontroller.getquery);
router.get('/api/query/:_id',querycontroller.getonequery);
router.put('/api/query/:_id',querycontroller.updatequery);
router.delete('/api/query/:_id',querycontroller.deletequery);

 
export default router;
