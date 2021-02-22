import { EnvironmentEntity } from '../environment.entity'
import { Environment } from '../../../application/models/environment'
import { Measurement } from '../../../application/models/measurement'

export class EnvironmentEntityMapper {
    public transform(item: any): any {
        if (item instanceof Environment) return this.modelToModelEntity(item)
        return this.jsonToModel(item)
    }

    public modelToModelEntity(item: Environment): EnvironmentEntity {
        const result: EnvironmentEntity = new EnvironmentEntity()
        if (!item) return result

        if (item.id !== undefined) result.id = item.id
        if (item.temperature !== undefined) result.temperature = item.temperature.toJSON()
        if (item.humidity !== undefined) result.humidity = item.humidity.toJSON()

        return result
    }

    public jsonToModel(item: any): Environment {
        const result: Environment = new Environment()
        if (!item) return result

        if (item.id !== undefined) result.id = item.id
        if (item.created_at !== undefined) result.created_at = item.created_at
        if (item.temperature !== undefined) result.temperature = new Measurement().fromJSON(item.temperature)
        if (item.humidity !== undefined) result.humidity = new Measurement().fromJSON(item.humidity)

        return result
    }
}
