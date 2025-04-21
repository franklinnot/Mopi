import {Router} from 'express';
import type {Request, Response} from 'express';

const healthRouter = Router();

healthRouter.get('/health', (_req: Request, res: Response) => {
    res.status(200).send("Server is running");
});

export default healthRouter;