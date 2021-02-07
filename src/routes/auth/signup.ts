import express from 'express';

const router = express.Router();

router.post('/', validator(schema.signup));