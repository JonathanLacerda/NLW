import express from 'express'
import knex from './database/connection'

import PointsController from './controllers/PointsControllers'
import ItemsController from './controllers/ItemsController'

const pointsController = new PointsController()
const itemsController = new ItemsController()

const routes = express.Router();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create)

export default routes