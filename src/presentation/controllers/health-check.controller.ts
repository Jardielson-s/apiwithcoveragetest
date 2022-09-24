import { IHttpResponse } from 'src/shared/interfaces/IHttpResponse.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'
import { ok, server } from '../interfaces/responses.interface'

export class HealthCheckController {
    constructor(private useCase: IUseCase<void>) {}
    async handler(): Promise<IHttpResponse> {
        try {
            const message = await this.useCase.execute()
            return ok(message)
        } catch (error: any) {
            return server(error.message)
        }
    }
}
