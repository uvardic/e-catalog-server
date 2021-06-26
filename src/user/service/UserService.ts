import User from '../model/User'
import {Context, IService} from '../../context'
import IErrorResponse from '../../error/IErrorResponse'

export default class UserService implements IService {

    public async getByUsername(username: string): Promise<User|IErrorResponse> {
        const query = `SELECT * FROM user WHERE username = '${username}'`

        return new Promise<User|IErrorResponse>(
            async resolve => {
                Context.getInstance().getDatabaseConnection().execute(query)
                    .then(async result => {
                        const row = result[0][0]
                        const response = await this.map(row)
                        resolve(response)
                    })
                    .catch(error => {
                        resolve({
                            errorCode: error?.errno,
                            errorMessage: error?.sqlMessage
                        })
                    })
            }
        )
    }

    private async map(row: any): Promise<User> {
        const item: User = new User()
        item.username = row.username
        item.password =  row.password
        item.role = row.role
        return item
    }

}