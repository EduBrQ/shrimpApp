import { Entity } from './entity'
import { Measurement } from './measurement'

export class Environment extends Entity {
    private _temperature?: Measurement
    private _humidity?: Measurement

    constructor() {
        super()

    }

    get temperature(): Measurement | undefined {
        return this._temperature
    }

    set temperature(value: Measurement | undefined) {
        this._temperature = value
    }

    get humidity(): Measurement | undefined {
        return this._humidity
    }

    set humidity(value: Measurement | undefined) {
        this._humidity = value
    }

    public fromJSON(json: any): Environment {
        if (!json) return this

        if (json.id) super.id = json.id
        if (json.created_at) super.created_at = json.created_at
        if (json.temperature) this.temperature = new Measurement().fromJSON({ value: json.temperature, unit: '°C' })
        if (json.humidity) this.humidity = new Measurement().fromJSON({ value: json.humidity, unit: '%' })

        return this

    }

    public toJSON() {
        return {
            id: super.id,
            created_at: super.created_at,
            temperature: this.temperature?.toJSON(),
            humidity: this.humidity?.toJSON()
        }
    }
}
