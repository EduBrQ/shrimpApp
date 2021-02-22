import { Double } from 'aws-sdk/clients/apigateway'
// import { Entity } from './entity'

export class Racao {
    private _data_coleta?: Date
    private _qnt_manha?: Double
    private _qnt_tarde?: Double

    constructor() {
        // super()

    }

    get dataColeta(): Date | undefined {
        return this._data_coleta
    }

    set dataColeta(value: Date | undefined) {
        this._data_coleta = value
    }

    get qntManha(): Double | undefined {
        return this._qnt_manha
    }

    set qntManha(value: Double | undefined) {
        this._qnt_manha = value
    }

    get qntTarde(): Double | undefined {
        return this._qnt_tarde
    }

    set qntTarde(value: Double | undefined) {
        this._qnt_tarde = value
    }

    public fromJSON(json: any): Racao {
        if (!json) return this

        // if (json.id) super.id = json.id
        // if (json.created_at) super.created_at = json.created_at
        if (json.data_coleta) this._data_coleta = json.data_coleta
        if (json.qnt_manha) this._qnt_manha = json.qnt_manha
        if (json.qnt_tarde) this._qnt_tarde = json.qnt_tarde

        return this

    }

    public toJSON() {
        return {
            data_coleta: this._data_coleta?.toJSON(),
            qnt_manha: this._qnt_manha,
            qnt_tarde: this._qnt_tarde
        }
    }
}
