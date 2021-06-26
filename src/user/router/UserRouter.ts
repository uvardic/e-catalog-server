import * as express from 'express'
import UserController from '../controller/UserController'
import {IRouter} from '../../router'
import {Context} from '../../context'
import UserService from '../service/UserService'

export default class UserRouter implements IRouter {

    setupRoute(app: express.Application) {
        const userService: UserService = Context.getInstance().getService('UserService')
        const userController: UserController = new UserController(userService)

        // app.post('/user/save', userController.save.bind(userController))
        app.get('/user/get/username=:username', userController.getByUsername.bind(userController))
    }

}