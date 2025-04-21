import {Router } from 'express';
import type {Request,Response} from 'express';

const apiRouter = Router();

apiRouter.get('/', (_req: Request, res: Response) => {
    res.status(200).send('API is running');
});

export default apiRouter;
