import { Model } from 'mongoose'
import { IRepository } from '../../../../shared/interfaces/IRepository.interface'
import { IUserDocument, IUserSchema } from '../schemas/user.schema'

export class UserRepository implements IRepository<IUserSchema> {
    constructor(private readonly model: Model<IUserDocument>) {}

    async save(data: IUserSchema): Promise<IUserDocument> {
        return this.model.create(data)
    }

    async findById(id: string): Promise<IUserDocument | null> {
        return this.model.findById(id)
    }
    async findByEmail(email: string): Promise<IUserDocument | null> {
        return this.model.findOne({ email: email })
    }
}
