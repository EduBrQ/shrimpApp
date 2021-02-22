import { Request, Response } from 'express';
import { IExceptionError } from '../exceptions/api.exception';
import { RacaoService } from '../../application/service/racao.service'
import { Racao } from '../../application/models/racao'

export class RacaoController {
    private _service: RacaoService
    private static _instance: RacaoController

    protected constructor() {
        this._service = RacaoService.getInstance()
    }

    public static getInstance(): RacaoController {
        if (!this._instance) this._instance = new RacaoController()
        return this._instance
    }

    getAllRacao(req: Request, res: Response) {
        return this._service.getAll(req.query)
            .then((result: Array<Racao>) => res.status(200).send(this.toJSONView(result)))
            .catch((err: IExceptionError) => res.status(err.code).send(err))
    }

    getRacaoById(req: Request, res: Response) {
        return this._service.getById(req.params.racao_id)
            .then((result: Racao) => res.status(200).send(this.toJSONView(result)))
            .catch((err: IExceptionError) => res.status(err.code).send(err))
    }

    getLastRacao(req: Request, res: Response) {
        return this._service.getLast()
            .then((result: Racao) => res.status(200).send(this.toJSONView(result)))
            .catch((err: IExceptionError) => res.status(err.code).send(err))
    }

    saveRacao(req: Request, res: Response) {
        return this._service.create(new Racao().fromJSON(req.body))
            .then((result: Racao) => res.status(201).send(this.toJSONView(result)))
            .catch((err: IExceptionError) => {
                if (err) {
                    return res.json(err)
                } else {
                }
            }
                // res.status(err.code).send(err)
            )
    }

    deleteRacao(req: Request, res: Response) {
        return this._service.delete(req.params.racao_id)
            .then(() => res.status(204).send({}))
            .catch((err: IExceptionError) => res.status(err.code).send(err))
    }

    private toJSONView(racao: Racao | Array<Racao>) {
        if (racao instanceof Array) return racao.map(item => this.toJSONView(item))
        const result: any = racao.toJSON()
        return result
    }
}
