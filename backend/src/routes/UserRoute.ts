import express from 'express';
import * as UserController from '../controller/UserController';
import bodyParser from  'body-parser';

const router = express.Router();


router.use(bodyParser.json());
router.get("/", UserController.fetchUserInfo);

export default router;