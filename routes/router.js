import express from 'express';
import usercontroller from '../controller/usercontroller';
import articlecontroller from '../controller/articlecontroller';
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

 
export default router;
