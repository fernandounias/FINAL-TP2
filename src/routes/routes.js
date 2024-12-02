import { Router } from 'express';

const router = Router();

// router.use('/', );
router.get('/', (req, res) => {
    res.status(200).json({ message: "api working"})
});


export default router;
