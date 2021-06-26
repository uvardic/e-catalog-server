import * as express from 'express'

interface IRouter {

    setupRoute(app: express.Application)

}

class Router {

    public static setupRoutes(app: express.Application, routes: IRouter[]) {
        routes.forEach(route => route.setupRoute(app))
    }

}

export {
    IRouter,
    Router
}