// import { DynamoDatabase } from '../infrastructure/databases/aws/dynamo.database'
import { CustomLogger } from '../../config/custom.logger'
import { Strings } from '../utils/strings'
import { MySQLDatabase } from '../infrastructure/databases/sql/mysql.database'

export class BackgroundTask {
    private static _instance: BackgroundTask
    // private _dynamoDB: DynamoDatabase
    private _mysqlDB: MySQLDatabase
    private _logger: CustomLogger
    mysql: any
    connection: any

    protected constructor() {
        // this._dynamoDB = DynamoDatabase.getInstance()
        this._mysqlDB = MySQLDatabase.getInstance()
        this._logger = CustomLogger.getInstance()

    }

    public static getInstance(): BackgroundTask {
        if (!this._instance) this._instance = new BackgroundTask()
        return this._instance
    }

    // public async createTable(conn): Promise<void> {

    // cs

    // }

    public async run(): Promise<void> {
        try {
            await this._mysqlDB.createTable(Strings.DYNAMO_DB_CONFIG.RACAO_TABLE_NAME);
            this._logger.info(`MySQL table named ${Strings.DYNAMO_DB_CONFIG.RACAO_TABLE_NAME} created successful!`)
            return Promise.resolve()
        } catch (err) {
            if (err.code === 'ResourceInUseException') {
                this._logger.info(`MySQL table named ${Strings.DYNAMO_DB_CONFIG.RACAO_TABLE_NAME} already created!`)
                return Promise.resolve()
            }
            this._logger.error(`Could not create a table named ${Strings.DYNAMO_DB_CONFIG.RACAO_TABLE_NAME}:` +
                ` ${err.message}`)
            return Promise.resolve()
        }
    }
}
