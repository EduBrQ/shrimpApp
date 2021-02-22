import { RacaoEntity } from '../racao.entity'
import { Racao } from '../../../application/models/racao'

export class RacaoEntityMapper {
    public transform(item: any): any {
        if (item instanceof Racao) return this.modelToModelEntity(item)
        return this.jsonToModel(item)
    }

    public modelToModelEntity(item: Racao): RacaoEntity {
        const result: RacaoEntity = new RacaoEntity()
        if (!item) return result

        // if (item.id !== undefined) result.id = item.id
        if (item.dataColeta !== undefined) result.data_coleta = item.dataColeta.toJSON()
        if (item.qntManha !== undefined) result.qnt_manha = item.qntManha
        if (item.qntTarde !== undefined) result.qnt_tarde = item.qntTarde

        return result
    }

    public jsonToModel(item: any): Racao {
        const result: Racao = new Racao()
        if (!item) return result

        // if (item.id !== undefined) result.id = item.id
        // if (item.created_at !== undefined) result.created_at = item.created_at
        if (item.dataColeta !== undefined) result.dataColeta = item.dataColeta.toJSON()
        if (item.qntManha !== undefined) result.qntManha = item.qntManha
        if (item.qntTarde !== undefined) result.qntTarde = item.qntTarde

        return result
    }
}
