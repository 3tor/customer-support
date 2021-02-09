import express from 'express';
import { validate_input } from './validate';
import { signup } from "../../controllers/authController";

const router = express.Router();

router.post('/', validate_input, signup);

export default router;