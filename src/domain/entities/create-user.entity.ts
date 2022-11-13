import { Status } from '../enums/create-user.enum'
import { ICreateUser } from '../interfaces/Icreate-user.interface'

export class CreateUserEntity implements ICreateUser {
  name!: string
  email!: string
  password!: string
  status?: Status
  id!: string
  constructor (userData: ICreateUser) {
    Object.assign(this, userData)
  }
}
