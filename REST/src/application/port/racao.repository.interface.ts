import { IRepository } from './repository.interface';
import { Racao } from '../models/racao'

export interface IRacaoRepository extends IRepository<Racao> {
    getLast(): Promise<Racao>
}
