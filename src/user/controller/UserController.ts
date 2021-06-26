import UserService from '../service/UserService'
import {Request, Response} from 'express'
import User from '../model/User'
import IErrorResponse from "../../error/IErrorResponse";

export default class UserController {

    private userService: UserService

    constructor(userService: UserService) {
        this.userService = userService
    }

    // public async save(req: Request, res: Response, next: NextFunction) {
    //     const user: User = await this.userService.save()
    //     res.send(user)
    // }

    public async getByUsername(req: Request, res: Response) {
        const username: string = req.params.username
        const user: User|IErrorResponse = await this.userService.getByUsername(username)

        if (user === null)
            res.sendStatus(404)
        else
            res.send(user)
    }

}