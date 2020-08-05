import { Router } from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = Router();

const classesController = new ClassesController();
const connectionController = new ConnectionController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.post('/connections', connectionController.create);
routes.get('/connections', connectionController.index);

export default routes;
