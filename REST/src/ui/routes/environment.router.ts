import { Request, Response, Router } from 'express'
import { IRouter } from './router.interface'
import { EnvironmentController } from '../controllers/environment.controller'

class EnvironmentRouter implements IRouter<EnvironmentController> {

    router: Router
    controller: EnvironmentController

    constructor() {
        this.router = Router()
        this.controller = EnvironmentController.getInstance()
        this.initialize()
    }

    initialize(): Router {
        this.router.post('/', (req: Request, res: Response) => this.controller.saveEnvironment(req, res))
        this.router.get('/', (req: Request, res: Response) => this.controller.getAllEnvironments(req, res))
        this.router.get('/last', (req: Request, res: Response) => this.controller.getLastEnvironment(req, res))
        this.router.get('/:environment_id', (req: Request, res: Response) => this.controller.getEnvironmentById(req, res))
        this.router.delete('/:environment_id', (req: Request, res: Response) => this.controller.deleteEnvironment(req, res))
        return this.router
    }


}

export default new EnvironmentRouter().router
