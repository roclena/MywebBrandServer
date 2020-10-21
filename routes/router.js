import express from 'express';
import usercontroller from '../controller/usercontroller';
const router = express.Router();

router.post("/api/signup",usercontroller.createUser );
router.get('/api/users', usercontroller.getUser);
router.post('/api/login',usercontroller.getoneUser);

 
export default router;
