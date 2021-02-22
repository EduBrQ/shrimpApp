import AWS from 'aws-sdk'
import dotenv from 'dotenv'
import moment from 'moment'

dotenv.config()

export class DynamoDatabase {

    private _dynamoDb: any

    private static _instance: DynamoDatabase

    protected constructor() {
        AWS.config.update({
            region: 'us-east-2',
            credentials: {
                accessKeyId: `${process.env.AWS_ACCESS_KEY}`,
                secretAccessKey: `${process.env.AWS_SECRET_KEY}`
            }
        })

        this._dynamoDb = new AWS.DynamoDB.DocumentClient()
    }

    public static getInstance(): DynamoDatabase {
        if (!this._instance) this._instance = new DynamoDatabase()
        return this._instance
    }

    public createTable(name: string): Promise<any> {
        const params: any = {
            TableName: name,
            KeySchema: [
                { AttributeName: 'id', KeyType: 'HASH' },
                { AttributeName: 'created_at', KeyType: 'RANGE' }
            ],
            AttributeDefinitions: [
                { AttributeName: 'id', AttributeType: 'S' },
                { AttributeName: 'created_at', AttributeType: 'S' }
            ],
            ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }
        }
        return new Promise<any>((resolve, reject) => {
            new AWS.DynamoDB()
                .createTable(params, (err, data) => {
                    if (err) return reject({ statusCode: err.statusCode, code: err.code, message: err.message })
                    return resolve(data)
                })

        })
    }

    public save(data: any, table: string): Promise<any> {
        let params = { TableName: table, Item: data }
        return new Promise<any>((resolve, reject) => {
            this._dynamoDb.put(params, (err, result) => {
                if (err) return reject({ statusCode: err.statusCode, code: err.code, message: err.message })
                return resolve(data)
            })
        })
    }

    public getAllDesc(limit: number, table: string): Promise<any> {
        const params: any = {
            TableName: table,
            Limit: limit
        }
        return new Promise<any>((resolve, reject) => {
            this._dynamoDb.scan(params, (err, data) => {
                if (err) return reject({ statusCode: err.statusCode, code: err.code, message: err.message })
                return resolve(data.Items.sort((prev, next) => moment(prev.created_at).diff(moment(next.created_at)) > 0 ? -1 : 1))
            })
        })
    }

    public getAllAsc(limit: number, table: string): Promise<any> {
        const params: any = {
            TableName: table,
            Limit: limit
        }
        return new Promise<any>((resolve, reject) => {
            this._dynamoDb.scan(params, (err, data) => {
                if (err) return reject({ statusCode: err.statusCode, code: err.code, message: err.message })
                return resolve(data.Items.sort((prev, next) => moment(prev.created_at).diff(moment(next.created_at)) > 0 ? 1 : -1))
            })
        })
    }

    public getById(id: string, table: string): Promise<any> {
        const params: any = {
            TableName: table,
            Count: 1,
            FilterExpression: '#atribute =:value',
            ExpressionAttributeNames: { '#atribute': 'id' },
            ExpressionAttributeValues: { ':value': id }
        }
        return new Promise<any>((resolve, reject) => {
            this._dynamoDb.scan(params, (err, data) => {
                if (err) return reject({ statusCode: err.statusCode, code: err.code, message: err.message })
                if (data.ScannedCount === 0) resolve(undefined)
                return resolve(data.Items[0])
            })
        })
    }

    public delete(id: string, table: string): Promise<boolean> {
        const params: any = {
            TableName: table,
            Key: { id: id }
        }

        return new Promise<any>((resolve, reject) => {
            this._dynamoDb.delete(params, (err, data) => {
                if (err) return reject({ statusCode: err.statusCode, code: err.code, message: err.message })
                return resolve(!!data)
            })
        })
    }
}


