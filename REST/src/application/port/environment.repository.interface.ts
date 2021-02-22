import { IRepository } from './repository.interface';
import { Environment } from '../models/environment'

export interface IEnvironmentRepository extends IRepository<Environment> {
    getLast(): Promise<Environment>
}
