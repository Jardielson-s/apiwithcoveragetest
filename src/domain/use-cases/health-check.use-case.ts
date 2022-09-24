import { IUseCase } from 'src/shared/interfaces/IUseCase.interface'

export class HealthCheckUseCase implements IUseCase<void> {
    async execute(): Promise<string> {
        return 'HEALTH CHECK OK'
    }
}
