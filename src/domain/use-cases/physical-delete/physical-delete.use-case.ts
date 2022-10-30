/* eslint-disable no-useless-catch */
import { ICreateUser } from 'src/domain/interfaces/Icreate-user.interface'
import { IRepository } from 'src/shared/interfaces/IRepository.interface'
import { IUseCase } from '../../../shared/interfaces/IUseCase.interface'
import { ILoggerService } from 'src/shared/interfaces/ILoggerServices.interface'
import { IFindByIdUser } from 'src/domain/interfaces/Ifind-by-id-user.interface'

const PHYSICAL_DELETE_USE_CASE_DELETED = 'physical_delete_use_case_deleted'
const PHYSICAL_DELETE_USE_CASE_ERROR = 'physical_delete_use_case_received'

export class PhysicalDeleteUseCase implements IUseCase<IFindByIdUser> {
    constructor(
        private readonly repository: IRepository<ICreateUser>,
        private readonly loggerService: ILoggerService
    ) {}

    async execute(data: IFindByIdUser): Promise<ICreateUser> {
        try {
            const user = await this.repository.delete(data.id)
            this.loggerService.info(PHYSICAL_DELETE_USE_CASE_DELETED, data.id)
            return user
        } catch (error: any) {
            this.loggerService.info(
                PHYSICAL_DELETE_USE_CASE_ERROR,
                error.message
            )
            return error
        }
    }
}
