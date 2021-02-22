export class ApiException extends Error implements IExceptionError {
    code: number
    description?: string

    constructor(code: number, message: string, description?: string) {
        super(message)
        this.code = code
        this.description = description

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, new.target.prototype)
    }

    toJson(): Object {
        return {
            'code': this.code,
            'message': this.message,
            'description': this.description
        }
    }
}

export interface IExceptionError {
    code: number
    message: string
    description?: string

    toJson(): Object
}
