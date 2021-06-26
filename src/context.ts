import * as mysql from 'mysql2/promise'

interface IService {}

class Context {

    private static instance: Context

    public static getInstance(): Context {
        if (this.instance)
            return this.instance

        this.instance = new Context()
        return this.instance;
    }

    private constructor() {}

    private database:  mysql.Connection

    public async connectToDatabase(databaseConf: object) {
        this.database = await mysql.createConnection(databaseConf)
        // this.database.connect()
    }

    public getDatabaseConnection(): mysql.Connection {
        return this.database
    }

    private services = new Set<IService>()

    public registerService(...services: IService[]) {
        services.forEach(service => this.services.add(service))
    }

    public getService<T extends IService>(name: string): T {
        for (const service of this.services) {
            if (service.constructor.name === name)
                return service as T
        }

        throw new Error(`Service with name: ${name} wasn't found!`)
    }

}

export {
    IService,
    Context
}
