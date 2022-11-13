import { Status } from '../enums/create-user.enum'

export interface ICreateUser {
  id: string
  name: string
  email: string
  password: string
  status?: Status
}
