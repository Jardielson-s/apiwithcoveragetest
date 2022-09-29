/* eslint-disable no-useless-catch */
import { CreateUserEntity } from 'src/domain/entities/create-user.entity'
import { Status } from '../../enums/create-user.enum'
import { ICreateUser } from 'src/domain/interfaces/Icreate-user.interface'
import { IRepository } from 'src/shared/interfaces/IRepository.interface'
import { IUseCase } from '../../../shared/interfaces/IUseCase.interface'
import { ILoggerService } from 'src/shared/interfaces/ILoggerServices.interface'

const CREATE_USER_USE_CASE_SAVED = 'create_user_use_case_saved'
const CREATE_USER_USE_CASE_ERROR = 'create_user_use_case_received'
export class CreateUserUseCase implements IUseCase<CreateUserEntity> {
    constructor(
        private readonly repository: IRepository<ICreateUser>,
        private readonly loggerService: ILoggerService
    ) {}

    async execute(userData: CreateUserEntity): Promise<ICreateUser> {
        try {
            const findEmail = await this.repository.findByEmail(userData.email)
            if (findEmail) {
                throw new Error('User email already Exists')
            }
            userData.status = Status.PROCESS
            const saved = await this.repository.save(userData)

            this.loggerService.info(CREATE_USER_USE_CASE_SAVED, userData)

            return saved
        } catch (error: any) {
            this.loggerService.info(CREATE_USER_USE_CASE_ERROR, error.message)
            throw error
        }
    }
}
