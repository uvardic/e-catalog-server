import IBaseModel from '../../common/base/IBaseModel.interface'

export default class User implements IBaseModel {
    username: string
    password: string
    role: 'USER' | 'ADMIN'
}