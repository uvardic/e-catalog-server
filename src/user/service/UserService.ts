import IApplicationResources from '../../common/IApplicationResources'
import User from '../model/User'
import BaseService from '../../common/base/BaseService'

export default class UserService extends BaseService<User>{

    constructor(resources: IApplicationResources) {
        super(resources);
    }

    protected async adaptModel(row: any): Promise<User> {
        const item: User = new User()
        item.username = row.username
        item.password =  row.password
        item.role = row.role
        return item
    }

    public async getByUsername(username: string): Promise<User> {
        const users = await this.getAllByFieldNameFromTable('user', 'username', username, {})
        return users[0]
    }

}