import { ApiException } from '../../ui/exceptions/api.exception'
import { Racao } from '../models/racao'

export class RacaoValidator {
    public static validate(item: Racao): void | ApiException {
        const fields: Array<string> = []
        if (!item.dataColeta) fields.push('data_coleta')
        if (!item.qntManha) fields.push('qnt_manha')
        if (!item.qntTarde) fields.push('qnt_tarde')
        if (fields.length > 0) {
            throw new ApiException(400,
                'Required fields missing.',
                `User: ${fields.join(', ')} required!`)
        }
    }

}
