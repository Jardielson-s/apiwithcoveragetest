import { CreateUserEntity } from '../../../domain/entities/create-user.entity'
import { ICreateUser } from '../../../domain/interfaces/Icreate-user.interface'
import { ILoggerService } from 'src/shared/interfaces/ILoggerServices.interface'
import { IRepository } from '../../../shared/interfaces/IRepository.interface'
import { IUseCase } from '../../../shared/interfaces/IUseCase.interface'

const UPDATE_USER_USE_CASE_SAVED = 'update_user_use_case_saved'
const UPDATE_USER_USE_CASE_ERROR = 'update_user_use_case_received'

export class UpdateUserUseCase implements IUseCase<CreateUserEntity> {
    constructor(
        private readonly repository: IRepository<ICreateUser>,
        private readonly loggerService: ILoggerService
    ) {}
    async execute(data: CreateUserEntity): Promise<CreateUserEntity | null> {
        try {
            const emailExits = await this.repository.findByEmail(data.email)
            if (emailExits) {
                throw new Error('User email already Exists')
            }
            const update: ICreateUser | null = await this.repository.update(
                data,
                data.id
            )
            this.loggerService.info(UPDATE_USER_USE_CASE_SAVED, data)

            return update
        } catch (error: any) {
            this.loggerService.info(UPDATE_USER_USE_CASE_ERROR, error.message)
            throw error
        }
    }
}
