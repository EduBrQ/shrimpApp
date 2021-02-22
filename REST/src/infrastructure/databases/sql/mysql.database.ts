
import dotenv from 'dotenv'
import moment from 'moment'

dotenv.config()

export class MySQLDatabase {

    private _mysql: any

    private static _instance: MySQLDatabase
    _connection: any

    protected constructor() {


        this._mysql = require('mysql');

        this._connection = this._mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'teste'
        });


        this._connection.connect();
    }

    public static getInstance(): MySQLDatabase {
        if (!this._instance) this._instance = new MySQLDatabase()
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

            const sql = `CREATE TABLE ${name} (data_coleta DATE, qnt_manha DOUBLE, qnt_tarde DOUBLE)`

            this._connection.query(sql, function (err, results, fields) {
                if (err) return reject({ statusCode: err.statusCode, code: err.code, message: err.message });
                return resolve(fields)
            });
        })

    }



    public save(data: any, table: string): Promise<any> {
        let params = { TableName: table, Item: data }
        return new Promise<any>((resolve, reject) => {
            this._connection.put(params, (err, result) => {
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
            this._connection.scan(params, (err, data) => {
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
            this._connection.scan(params, (err, data) => {
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
            this._connection.scan(params, (err, data) => {
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
            this._connection.delete(params, (err, data) => {
                if (err) return reject({ statusCode: err.statusCode, code: err.code, message: err.message })
                return resolve(!!data)
            })
        })
    }



}



// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

// connection.end();

// var mysql = require('mysql');
// var pool = mysql.createPool(...);

// pool.getConnection(function (err, connection) {
//     if (err) throw err; // not connected!

//     // Use the connection
//     connection.query('SELECT something FROM sometable', function (error, results, fields) {
//         // When done with the connection, release it.
//         connection.release();

//         // Handle error after the release.
//         if (error) throw error;

//         // Don't use the connection here, it has been returned to the pool.
//     });
// });
