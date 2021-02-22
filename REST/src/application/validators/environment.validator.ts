import { ApiException } from '../../ui/exceptions/api.exception'
import { Environment } from '../models/environment'
import { MeasurementValidator } from './measurement.validator'

export class EnvironmentValidator {
    public static validate(item: Environment): void | ApiException {
        const fields: Array<string> = []
        if (!item.temperature) fields.push('temperature')
        else MeasurementValidator.validate(item.temperature)
        if (!item.humidity) fields.push('humidity')
        else MeasurementValidator.validate(item.humidity)
        if (fields.length > 0) {
            throw new ApiException(400,
                'Required fields missing.',
                `User: ${fields.join(', ')} required!`)
        }
    }

}
