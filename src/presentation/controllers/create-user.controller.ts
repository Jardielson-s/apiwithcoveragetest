import { IHttpResponse } from 'src/shared/interfaces/IHttpResponse.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'
import { CreateUserDto } from '../dto/create-user.dto'
import { RestInpuValidator } from '../decorators/restInputdecorator.decorator'
import { badRequest, created, server } from '../interfaces/responses.interface'

export class CreateUserController {
    constructor(private readonly useCase: IUseCase<CreateUserDto>) {}

    //@RestInpuValidator<>(CreateUserDto)
    async handler(userData: CreateUserDto): Promise<IHttpResponse> {
        try {
            const dataUseCase = await this.useCase.execute(userData)
            return created(dataUseCase)
        } catch (error: any) {
            if (['User email already Exists'].includes(error.message)) {
                return badRequest(error.message)
            }
            return server(error.message)
        }
    }
}
