import { Request, Response, Router } from 'express'
import { IRouter } from './router.interface'
import { RacaoController } from '../controllers/racao.controller'

class RacaoRouter implements IRouter<RacaoController> {

    router: Router
    controller: RacaoController

    constructor() {
        this.router = Router()
        this.controller = RacaoController.getInstance()
        this.initialize()
    }

    initialize(): Router {
        this.router.post('/', (req: Request, res: Response) => this.controller.saveRacao(req, res))
        this.router.get('/', (req: Request, res: Response) => this.controller.getAllRacao(req, res))
        this.router.get('/last', (req: Request, res: Response) => this.controller.getLastRacao(req, res))
        this.router.get('/:racao_id', (req: Request, res: Response) => this.controller.getRacaoById(req, res))
        this.router.delete('/:racao_id', (req: Request, res: Response) => this.controller.deleteRacao(req, res))
        return this.router
    }


}

export default new RacaoRouter().router
