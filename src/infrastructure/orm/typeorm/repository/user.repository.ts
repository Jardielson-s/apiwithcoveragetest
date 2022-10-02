import { DataSource } from 'typeorm'
import { IRepository } from '../../../../shared/interfaces/IRepository.interface'
import { User } from '../entities/user.entity'

export class UserRepository implements IRepository<User> {
    constructor(private readonly model: DataSource) {}

    async save(data: User): Promise<User> {
        const dataObject = new User()
        Object.assign(dataObject, data)
        return this.model.manager.save(dataObject)
    }
    async findById(id: string): Promise<User | null> {
        return this.model.manager.findOneBy(User, { id })
    }
    async findByEmail(email: string): Promise<User | null> {
        return this.model.manager.findOneBy(User, { email: email })
    }
}
