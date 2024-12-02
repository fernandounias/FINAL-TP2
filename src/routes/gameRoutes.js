import { Router } from 'express';
import gameController from '../controllers/gameController.js';

const router = Router();

router.post('/newGame', gameController.addGame);
router.post('/sellGame', gameController.registerSale);
router.get('/inventory', gameController.getInventory);
router.get('/statistics', gameController.getStatistics);

export default router;