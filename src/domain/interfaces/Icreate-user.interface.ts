import { Status } from '../enums/create-user.enum'

export interface ICreateUser {
    name: string
    email: string
    password: string
    status?: Status
}
