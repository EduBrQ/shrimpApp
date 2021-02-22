import { IService } from './service.interface'
import { Environment } from '../models/environment'

export interface IEnvironmentService extends IService<Environment> {
    getLast(): Promise<Environment>
}
