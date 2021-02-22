import { IEnvironmentRepository } from '../../application/port/environment.repository.interface'
import { MySQLDatabase } from '../databases/sql/mysql.database'
import { Environment } from '../../application/models/environment'
import { EnvironmentEntityMapper } from '../entity/mapper/environment.entity.mapper'
import { v4 as uuid } from 'uuid';
import { Strings } from '../../utils/strings'
import { ApiException } from '../../ui/exceptions/api.exception'

export class EnvironmentRepository implements IEnvironmentRepository {
    private static _instance: EnvironmentRepository
    private _mapper: EnvironmentEntityMapper
    private _mysqlDB: MySQLDatabase
    protected TABLE_NAME: string = Strings.DYNAMO_DB_CONFIG.ENVIRONMENT_TABLE_NAME

    protected constructor() {
        this._mysqlDB = MySQLDatabase.getInstance()
        this._mapper = new EnvironmentEntityMapper()
    }

    public static getInstance(): EnvironmentRepository {
        if (!this._instance) this._instance = new EnvironmentRepository()
        return this._instance
    }

    save(item: Environment): Promise<Environment> {
        const itemNew: any = this._mapper.transform(item)
        itemNew.id = uuid()
        itemNew.created_at = new Date().toISOString()
        return new Promise<Environment>((resolve, reject) => {
            this._mysqlDB.save(itemNew, this.TABLE_NAME)
                .then(res => resolve(this._mapper.transform(res)))
                .catch(err => reject(new ApiException(err.statusCode, err.message)))
        })
    }

    getAll(query: any): Promise<Array<Environment>> {
        const limit: number = query.pagination?.limit || 100
        const sort = query.sort?.created_at === 1 ? 1 : -1
        if (sort == 1) {
            return new Promise<Array<Environment>>((resolve, reject) => {
                this._mysqlDB.getAllAsc(limit, this.TABLE_NAME)
                    .then(res => resolve(res.map(item => this._mapper.transform(item))))
                    .catch(err => reject(new ApiException(err.statusCode, err.message)))
            })
        }
        return new Promise<Array<Environment>>((resolve, reject) => {
            this._mysqlDB.getAllDesc(limit, this.TABLE_NAME)
                .then(res => resolve(res.map(item => this._mapper.transform(item))))
                .catch(err => reject(new ApiException(err.statusCode, err.message)))
        })
    }

    getById(id: string): Promise<Environment> {
        return new Promise<Environment>((resolve, reject) => {
            this._mysqlDB.getById(id, this.TABLE_NAME)
                .then(res => resolve(this._mapper.transform(res)))
                .catch(err => reject(new ApiException(err.statusCode, err.message)))
        })
    }

    delete(id: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this._mysqlDB.delete(id, this.TABLE_NAME)
                .then(res => resolve(res))
                .catch(err => reject(new ApiException(err.statusCode, err.message)))

        })
    }

    update(item: Environment): Promise<Environment> {
        throw new Error('Not implemented!')
    }

    getLast(): Promise<Environment> {
        return new Promise<Environment>((resolve, reject) => {
            this.getAll({ pagination: { limit: 100 } })
                .then(res => {
                    if (!res?.length) return resolve(undefined!)
                    return resolve(res[0])
                })
                .catch(err => reject(new ApiException(err.statusCode, err.message)))
        })
    }
}
