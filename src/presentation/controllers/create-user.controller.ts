import { IHttpResponse } from 'src/shared/interfaces/IHttpResponse.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'
import { CreateUserDto } from '../dto/create-user.dto'
import { badRequest, ok, server } from '../interfaces/responses.interface'

export class CreateUserController {
  constructor (private readonly useCase: IUseCase<CreateUserDto & {url: string}>) {}

  async handler (userData: CreateUserDto & {url: string}): Promise<IHttpResponse> {
    try {
      const dataUseCase = await this.useCase.execute(userData)
      return ok(`An email was sent to: ${dataUseCase.email}`)
    } catch (error: any) {
      if (['User email already Exists'].includes(error.message)) {
        return badRequest(error.message)
      }
      return server(error.message)
    }
  }
}
