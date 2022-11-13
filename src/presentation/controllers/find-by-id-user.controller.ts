import { IHttpResponse } from 'src/shared/interfaces/IHttpResponse.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'
import { FindByIdUserDto } from '../dto/find-by-id-user.dto'
import { notFound, ok, server } from '../interfaces/responses.interface'

export class FindByIdUseController {
  constructor (private readonly useCase: IUseCase<FindByIdUserDto>) {}

  async handler (data: FindByIdUserDto): Promise<IHttpResponse> {
    try {
      const dataUseCase = await this.useCase.execute(data)
      return ok(dataUseCase)
    } catch (error: any) {
      if (['User id not Exists'].includes(error.message)) {
        return notFound(error.message)
      }
      return server(error.message)
    }
  }
}
