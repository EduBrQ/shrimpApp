export class Measurement {
    private _value?: number
    private _unit?: string

    get value(): number | undefined {
        return this._value
    }

    set value(value: number | undefined) {
        this._value = value
    }

    get unit(): string | undefined {
        return this._unit
    }

    set unit(value: string | undefined) {
        this._unit = value
    }

    public fromJSON(json: any): Measurement {
        if (!json) return this

        if (json.value) this.value = json.value
        if (json.unit) this.unit = json.unit

        return this

    }

    public toJSON() {
        return {
            value: this.value,
            unit: this.unit
        }
    }
}
