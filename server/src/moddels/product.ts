import { Router } from 'express';
import { getProducts } from '../controllers/product';
import validateToken from '../routes/validateToken';

const router = Router();

router.get('/',validateToken, getProducts)

export default router;