import { Router } from 'express';
import empresaRoutes from './empresaRoutes';

const expressRouter = Router();

expressRouter.use('/', empresaRoutes);

export default expressRouter;