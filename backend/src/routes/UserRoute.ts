import express from 'express';
import * as UserController from '../controller/UserController';


const router = express.Router();



router.get("/", UserController.fetchUserInfo);

export default router;