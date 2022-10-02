/* eslint-disable no-useless-catch */
import { ICreateUser } from 'src/domain/interfaces/Icreate-user.interface'
import { IRepository } from 'src/shared/interfaces/IRepository.interface'
import { IUseCase } from '../../../shared/interfaces/IUseCase.interface'
import { ILoggerService } from 'src/shared/interfaces/ILoggerServices.interface'
import { IFindByIdUser } from 'src/domain/interfaces/Ifind-by-id-user.interface'

const FIND_USER_BY_ID_USE_CASE_FOUND = 'find_user_by_id_use_case_found'
const FIND_USER_BY_ID_USE_CASE_ERROR = 'find_user_by_id_use_case_received'

export class FindUserByIdUseCase implements IUseCase<IFindByIdUser> {
    constructor(
        private readonly repository: IRepository<ICreateUser>,
        private readonly loggerService: ILoggerService
    ) {}

    async execute(data: IFindByIdUser): Promise<ICreateUser> {
        try {
            const findEmail = await this.repository.findById(data.id)
            if (!findEmail) {
                throw new Error('User id not Exists')
            }

            this.loggerService.info(FIND_USER_BY_ID_USE_CASE_FOUND, data.id)

            return findEmail
        } catch (error: any) {
            this.loggerService.info(
                FIND_USER_BY_ID_USE_CASE_ERROR,
                error.message
            )
            return error
        }
    }
}
