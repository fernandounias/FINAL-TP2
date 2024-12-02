import { Router } from 'express';
import gameRoutes from './gameRoutes.js'

const router = Router();

router.use('/games', gameRoutes);

router.get('/', (req, res) => {
    res.status(200).json({ message: "api working"})
});


export default router;
