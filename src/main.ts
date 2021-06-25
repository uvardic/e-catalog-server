import * as express from 'express'
import * as cors from 'cors'
import * as confResolver from './conf/ConfResolver'
import * as mysql from 'mysql2/promise'
import UserRouter from './user/router/UserRouter'
import ApplicationResources from './common/IApplicationResources'

async function main() {
    const app: express.Application = express()
    const conf = confResolver.getConf('dev')
    const resources: ApplicationResources = {
        databaseConnection: await mysql.createConnection(conf.database)
    }

    app.use(cors())
    app.use(express.json())
    resources.databaseConnection.connect()
    app.use(
        conf.static.rout,
        express.static(conf.static.path, conf.static.options)
    )
    UserRouter.setupRoutes(app, resources)
    app.listen(conf.server.port)
}

main()
