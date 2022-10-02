import { IController } from 'src/shared/interfaces/IController.interface'
import { IHttpResponse } from 'src/shared/interfaces/IHttpResponse.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'
import { FindByIdUserDto } from '../dto/find-by-id-user.dto'
import {
    badRequest,
    noContent,
    server,
} from '../interfaces/responses.interface'

export class ValidateAccountController implements IController<FindByIdUserDto> {
    constructor(private readonly useCase: IUseCase<FindByIdUserDto>) {}
    async handler(id: FindByIdUserDto): Promise<IHttpResponse> {
        try {
            await this.useCase.execute(id)
            return noContent()
        } catch (error: any) {
            if (['Account validation failure'].includes(error.message)) {
                return badRequest('Account validation failure')
            }
            return server(error.message)
        }
    }
}
