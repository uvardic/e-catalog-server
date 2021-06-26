import * as express from 'express'
import IApplicationResources from './common/IApplicationResources'

interface IRouter {

    setupRoute(app: express.Application, resources: IApplicationResources)

}

class Router {

    public static setupRoutes(app: express.Application, resources: IApplicationResources, routes: IRouter[]) {
        routes.forEach(route => route.setupRoute(app, resources))
    }

}

export {
    IRouter,
    Router
}