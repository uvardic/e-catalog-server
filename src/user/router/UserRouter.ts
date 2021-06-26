import * as express from 'express'
import UserService from '../service/UserService'
import UserController from '../controller/UserController'
import IApplicationResources from '../../common/IApplicationResources'
import {IRouter} from '../../router'

export default class UserRouter implements IRouter {

    setupRoute(app: express.Application, resources: IApplicationResources) {
        const userService: UserService = new UserService(resources)
        const userController: UserController = new UserController(userService)

        // app.post('/user/save', userController.save.bind(userController))
        app.get('/user/get/username=:username', userController.getByUsername.bind(userController))
    }

}