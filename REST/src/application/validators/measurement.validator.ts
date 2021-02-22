import { ApiException } from '../../ui/exceptions/api.exception'
import { Measurement } from '../models/measurement'

export class MeasurementValidator {
    public static validate(item: Measurement): void | ApiException {
        const fields: Array<string> = []
        if (!item.value) fields.push('value')
        if (!item.unit) fields.push('unit')
        if (fields.length > 0) {
            throw new ApiException(400,
                'Required fields missing.',
                `Measurement: ${fields.join(', ')} required!`)
        }
    }

}
