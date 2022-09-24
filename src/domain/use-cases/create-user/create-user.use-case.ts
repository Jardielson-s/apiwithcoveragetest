/* eslint-disable no-useless-catch */
import { CreateUserEntity } from 'src/domain/entities/create-user.entity'
import { Status } from '../../enums/create-user.enum'
import { ICreateUser } from 'src/domain/interfaces/Icreate-user.interface'
import { IRepository } from 'src/shared/interfaces/IRepository.interface'
import { IUseCase } from '../../../shared/interfaces/IUseCase.interface'

export class CreateUserUseCase implements IUseCase<CreateUserEntity> {
    constructor(private repository: IRepository<ICreateUser>) {}

    async execute(userData: CreateUserEntity): Promise<ICreateUser> {
        try {
            const findEmail = await this.repository.findByEmail(userData.email)
            if (findEmail) {
                throw new Error('User email already Exists')
            }
            userData.status = Status.PROCESS
            const saved = await this.repository.save(userData)
            return saved
        } catch (error) {
            throw error
        }
    }
}
