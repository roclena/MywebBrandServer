import express from 'express';
import usercontroller from '../controller/usercontroller';
import articlecontroller from '../controller/articlecontroller';
const router = express.Router();

router.post("/api/signup",usercontroller.createUser );
router.get('/api/users', usercontroller.getUser);
router.post('/api/login',usercontroller.getoneUser);
//article Routes
router.post('/api/postarticle',articlecontroller.createarticle);

 
export default router;
