import { IHttpResponse } from '../../shared/interfaces/IHttpResponse.interface'
import { IUseCase } from '../../shared/interfaces/IUseCase.interface'
import { CreateUserDto } from '../dto/create-user.dto'
import { notFound, ok, server } from '../interfaces/responses.interface'

export class UpateUseController {
  constructor (private readonly useCase: IUseCase<CreateUserDto>) {}

  async handler (data: CreateUserDto): Promise<IHttpResponse> {
    try {
      const dataUseCase = await this.useCase.execute(data)
      return ok(dataUseCase)
    } catch (error: any) {
      if (['User email already Exists'].includes(error.message)) {
        return notFound(error.message)
      }
      return server(error.message)
    }
  }
}
