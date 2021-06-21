import * as express from 'express'
import * as cors from 'cors'
import * as confResolver from './conf/ConfResolver'

const app: express.Application = express()

const conf = confResolver.getConf('dev')

app.use(cors())
app.use(express.json())
app.use(
    conf.static.rout,
    express.static(conf.static.path, conf.static.options)
)
app.use((request, response) => {
    response.sendStatus(404)
})
app.listen(conf.server.port)
