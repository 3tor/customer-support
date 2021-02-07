import express from 'express';
import signup from './auth/signup';

const router = express.Router();

router.use('/signup', signup);