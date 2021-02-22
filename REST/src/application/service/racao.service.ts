import { IRacaoService } from '../port/racao.service.interface'
import { IRacaoRepository } from '../port/racao.repository.interface'
import { Racao } from '../models/Racao'
import { RacaoValidator } from '../validators/racao.validator'
import { RacaoRepository } from '../../infrastructure/repository/racao.repository'

export class RacaoService implements IRacaoService {
    private _repository: IRacaoRepository
    private static _instance: RacaoService

    protected constructor() {
        this._repository = RacaoRepository.getInstance()
    }

    public static getInstance(): RacaoService {
        if (!this._instance) this._instance = new RacaoService()
        return this._instance
    }

    getAll(query: any) {
        return new Promise<Array<Racao>>((resolve, reject) => {
            return this._repository.getAll(query)
                .then(result => resolve(result))
                .catch(err => reject(err))
        })
    }

    getById(id: string) {
        return new Promise<Racao>((resolve, reject) => {
            return this._repository.getById(id)
                .then(result => resolve(result))
                .catch(err => reject(err))
        })
    }

    getLast() {
        return new Promise<Racao>((resolve, reject) => {
            return this._repository.getLast()
                .then(result => resolve(result))
                .catch(err => reject(err))
        })
    }

    async create(item: Racao) {
        try {
            // RacaoValidator.validate(item)
            console.log(`####################`, item, `~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

            const result: Racao = await this._repository.save(item)
            return Promise.resolve(result)
        } catch (err) {
            return Promise.reject(err)
        }
    }

    async update(item: Racao) {
        try {
            RacaoValidator.validate(item)
            const result: Racao = await this._repository.update(item)
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
