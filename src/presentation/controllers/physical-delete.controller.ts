import { IHttpResponse } from 'src/shared/interfaces/IHttpResponse.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'
import { FindByIdUserDto } from '../dto/find-by-id-user.dto'
import { ok, server } from '../interfaces/responses.interface'

export class PhysicalDeleteController {
    constructor(private readonly useCase: IUseCase<FindByIdUserDto>) {}

    async handler(data: FindByIdUserDto): Promise<IHttpResponse> {
        try {
            const dataUseCase = await this.useCase.execute(data)
            return ok(dataUseCase)
        } catch (error: any) {
            return server(error.message)
        }
    }
}
