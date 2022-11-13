import { CreateUserEntity } from 'src/domain/entities/create-user.entity'
import { Status } from '../../enums/create-user.enum'
import { ICreateUser } from '../../../domain/interfaces/Icreate-user.interface'
import { IRepository } from '../../../shared/interfaces/IRepository.interface'
import { IUseCase } from '../../../shared/interfaces/IUseCase.interface'
import { ILoggerService } from '../../../shared/interfaces/ILoggerServices.interface'
import { ISendEmail } from '../../../shared/interfaces/ISend-email.interface'
import { envs } from '../../../config/envs/envs'

const CREATE_USER_USE_CASE_SAVED = 'create_user_use_case_saved'
const CREATE_USER_USE_CASE_ERROR = 'create_user_use_case_received'
export class CreateUserUseCase implements IUseCase<CreateUserEntity & {url: string}> {
  constructor (
    private readonly repository: IRepository<ICreateUser>,
    private readonly sendEmailService: ISendEmail,
    private readonly loggerService: ILoggerService
  ) {}

  async execute ({ url, ...userData }: CreateUserEntity & {url: string}): Promise<ICreateUser> {
    try {
      const findEmail = await this.repository.findByEmail(userData.email)
      if (findEmail != null) {
        throw new Error('User email already Exists')
      }
      userData.status = Status.PROCESS
      const saved = await this.repository.save(userData)

      this.loggerService.info(CREATE_USER_USE_CASE_SAVED, saved)
      await this.sendEmailService.send({
        from: envs.EMAIL_FROM,
        to: userData.email,
        subject: 'activate account',
        body: `${url}/${saved.id}/active`
      })
      return saved
    } catch (error: any) {
      this.loggerService.info(CREATE_USER_USE_CASE_ERROR, error.message)
      throw error
    }
  }
}
