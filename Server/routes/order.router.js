import express from 'express';
import { createOrder, getOrders } from '../controllers/order.controller.js';
import { body } from 'express-validator';
const router = express.Router();


router.post('/orders',
    body('email', 'email is required'), createOrder);
router.get('/orders', getOrders);
export default router;
