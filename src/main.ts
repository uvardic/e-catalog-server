import * as express from 'express'
import * as cors from 'cors'
import * as confResolver from './conf'
import UserRouter from './user/router/UserRouter'
import {Router} from './router'
import {Context} from './context'
import UserService from './user/service/UserService'

async function main() {
    const app: express.Application = express()

    const conf = confResolver.get('dev')

    app.use(cors())
    app.use(express.json())
    app.use(
        conf.static.rout,
        express.static(conf.static.path, conf.static.options)
    )
    app.listen(conf.server.port)

    const context = Context.getInstance()

    context.connectToDatabase(conf.database)
    context.registerService(
        new UserService()
    )
    Router.setupRoutes(app, [
        new UserRouter()
    ])
}

main()
