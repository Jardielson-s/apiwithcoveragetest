import { Model } from 'mongoose'
import { IRepository } from '../../../../shared/interfaces/IRepository.interface'
import { IUserDocument, IUserSchema } from '../schemas/user.schema'

export class UserRepository implements IRepository<IUserSchema> {
  constructor (private readonly model: Model<IUserDocument>) {}

  async save (data: IUserSchema): Promise<IUserDocument> {
    return await this.model.create(data)
  }

  async findById (id: string | number): Promise<IUserDocument | null> {
    return await this.model.findById({ _id: id })
  }

  async findByEmail (email: string): Promise<IUserDocument | null> {
    return await this.model.findOne({ email: email })
  }

  async update (data: IUserSchema, id: string): Promise<IUserSchema | null> {
    return await this.model.findByIdAndUpdate(id, data, { new: true })
  }

  async delete (id: string): Promise<any> {
    return await this.model.remove({ id: id })
  }
}
