import { IService } from './service.interface'
import { Racao } from '../models/racao'

export interface IRacaoService extends IService<Racao> {
    getLast(): Promise<Racao>
}
