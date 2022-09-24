import { IHttpResponse } from 'src/shared/interfaces/IHttpResponse.interface'
import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'

export class HealthCheckController {
    constructor(private useCase: IUseCase<void>) {}
    async handler(): Promise<IHttpResponse> {
        const message = await this.useCase.execute()
        return {
            body: message,
            status: 200,
        }
    }
}
