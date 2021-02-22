import { Request, Response, Router } from 'express'
import { IRouter } from './router.interface'
import environmentRouter from './environment.router'
import racaoRouter from './racao.router'

class IndexRouter implements IRouter<any> {
    router: Router

    constructor() {
        this.router = Router()
        this.initialize()
    }

    initialize(): void {
        // Readme
        this.router.get('/', (req: Request, res: Response) => res.redirect('/api/reference'))
        this.router.get('/api/reference', (req: Request, res: Response) => res.redirect('/api/reference'))

        this.router.use('/v1/environment', environmentRouter)
        this.router.use('/v1/racao', racaoRouter)
    }
}

export default new IndexRouter().router
