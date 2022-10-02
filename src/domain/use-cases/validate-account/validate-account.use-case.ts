import { IFindByIdUser } from '../../../domain/interfaces/Ifind-by-id-user.interface'
import { Status } from '../../../domain/enums/create-user.enum'
import { ICreateUser } from '../../../domain/interfaces/Icreate-user.interface'
import { ILoggerService } from '../../../shared/interfaces/ILoggerServices.interface'
import { IRepository } from '../../../shared/interfaces/IRepository.interface'
import { IUseCase } from '../../../shared/interfaces/IUseCase.interface'

const VALIDATE_ACCOUNT_USECASE_VALIDATED = 'validation.account.usecase.received'
const VALIDATE_ACCOUNT_USECASE_ERROR = 'validation.account.usecase.error'

export class ValidateAccountUseCase implements IUseCase<IFindByIdUser> {
    constructor(
        private readonly repository: IRepository<ICreateUser>,
        private readonly loggerService: ILoggerService
    ) {}
    async execute(data: IFindByIdUser): Promise<string | void> {
        try {
            let accountValidation = await this.repository.findById(data.id)
            if (!accountValidation) {
                throw new Error('Account validation failure')
            }

            accountValidation.status = Status.ACTIVE
            await this.repository.save(accountValidation)

            this.loggerService.info(
                VALIDATE_ACCOUNT_USECASE_VALIDATED,
                accountValidation
            )
        } catch (error: any) {
            this.loggerService.info(
                VALIDATE_ACCOUNT_USECASE_ERROR,
                error.message
            )
            return error
        }
    }
}
