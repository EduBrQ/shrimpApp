import { Request, Response } from 'express';
import { IExceptionError } from '../exceptions/api.exception';
import { EnvironmentService } from '../../application/service/environment.service'
import { Environment } from '../../application/models/environment'

export class EnvironmentController {
    private _service: EnvironmentService
    private static _instance: EnvironmentController

    protected constructor() {
        this._service = EnvironmentService.getInstance()
    }

    public static getInstance(): EnvironmentController {
        if (!this._instance) this._instance = new EnvironmentController()
        return this._instance
    }

    getAllEnvironments(req: Request, res: Response) {
        return this._service.getAll(req.query)
            .then((result: Array<Environment>) => res.status(200).send(this.toJSONView(result)))
            .catch((err: IExceptionError) => res.status(err.code).send(err))
    }

    getEnvironmentById(req: Request, res: Response) {
        return this._service.getById(req.params.environment_id)
            .then((result: Environment) => res.status(200).send(this.toJSONView(result)))
            .catch((err: IExceptionError) => res.status(err.code).send(err))
    }

    getLastEnvironment(req: Request, res: Response) {
        return this._service.getLast()
            .then((result: Environment) => res.status(200).send(this.toJSONView(result)))
            .catch((err: IExceptionError) => res.status(err.code).send(err))
    }

    saveEnvironment(req: Request, res: Response) {
        return this._service.create(new Environment().fromJSON(req.body))
            .then((result: Environment) => res.status(201).send(this.toJSONView(result)))
            .catch((err: IExceptionError) => res.status(err.code).send(err))
    }

    deleteEnvironment(req: Request, res: Response) {
        return this._service.delete(req.params.environment_id)
            .then(() => res.status(204).send({}))
            .catch((err: IExceptionError) => res.status(err.code).send(err))
    }

    private toJSONView(environment: Environment | Array<Environment>) {
        if (environment instanceof Array) return environment.map(item => this.toJSONView(item))
        const result: any = environment.toJSON()
        return result
    }
}

