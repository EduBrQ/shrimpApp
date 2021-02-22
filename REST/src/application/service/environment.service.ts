import { IEnvironmentService } from '../port/environment.service.interface'
import { IEnvironmentRepository } from '../port/environment.repository.interface'
import { Environment } from '../models/environment'
import { EnvironmentValidator } from '../validators/environment.validator'
import { EnvironmentRepository } from '../../infrastructure/repository/environment.repository'

export class EnvironmentService implements IEnvironmentService {
    private _repository: IEnvironmentRepository
    private static _instance: EnvironmentService

    protected constructor() {
        this._repository = EnvironmentRepository.getInstance()
    }

    public static getInstance(): EnvironmentService {
        if (!this._instance) this._instance = new EnvironmentService()
        return this._instance
    }

    getAll(query: any) {
        return new Promise<Array<Environment>>((resolve, reject) => {
            return this._repository.getAll(query)
                .then(result => resolve(result))
                .catch(err => reject(err))
        })
    }

    getById(id: string) {
        return new Promise<Environment>((resolve, reject) => {
            return this._repository.getById(id)
                .then(result => resolve(result))
                .catch(err => reject(err))
        })
    }

    getLast() {
        return new Promise<Environment>((resolve, reject) => {
            return this._repository.getLast()
                .then(result => resolve(result))
                .catch(err => reject(err))
        })
    }

    async create(item: Environment) {
        try {
            EnvironmentValidator.validate(item)
            const result: Environment = await this._repository.save(item)
            return Promise.resolve(result)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    async update(item: Environment) {
        try {
            EnvironmentValidator.validate(item)
            const result: Environment = await this._repository.update(item)
            return Promise.resolve(result)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    delete(id: string) {
        return new Promise<boolean>((resolve, reject) => {
            return this._repository.delete(id)
                .then((isDeleted: boolean) => resolve(isDeleted))
                .catch(err => reject(err))
        })
    }

}
