import { Router } from "express"
import { getUserService } from '../services/users/index.js'

const routes = Router()

routes.get('/api/v1/users', getUserService);

export default routes