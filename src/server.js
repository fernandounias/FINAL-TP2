import express from 'express';
import routes from './routes/routes.js';
import notFoundHandler from './middlewares/notFoundHandler.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/api', routes);

app.use(notFoundHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});