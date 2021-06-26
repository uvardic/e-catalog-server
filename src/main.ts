import * as express from 'express'
import * as cors from 'cors'
import * as confResolver from './conf/ConfResolver'
import * as mysql from 'mysql2/promise'
import UserRouter from './user/router/UserRouter'
import ApplicationResources from './common/IApplicationResources'
import {Router} from './router'

async function main() {
    const app: express.Application = express()
    const conf = confResolver.getConf('dev')
    const resources: ApplicationResources = {
        databaseConnection: await mysql.createConnection(conf.database)
    }
    resources.databaseConnection.connect()

    app.use(cors())
    app.use(express.json())
    app.use(
        conf.static.rout,
        express.static(conf.static.path, conf.static.options)
    )
    Router.setupRoutes(app, resources, [
        new UserRouter()
    ])
    app.listen(conf.server.port)
}

main()
