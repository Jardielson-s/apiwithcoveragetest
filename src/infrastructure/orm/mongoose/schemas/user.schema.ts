import { Model, Mongoose } from 'mongoose'
import { v4 } from 'uuid'

import { Status } from 'src/domain/enums/create-user.enum'

export interface IUserSchema {
  id: string
  name: string
  email: string
  password: string
  status?: Status
}

export interface IUserDocument extends IUserSchema, Document {}

export class UserSchema {
  private readonly model: Model<IUserDocument>
  constructor (private readonly mongoose: Mongoose) {
    const userSchema = new this.mongoose.Schema(
      {
        _id: {
          type: String,
          default: () => v4().replace(/\-/g, '')
        },
        name: {
          type: String,
          required: true,
          allowNull: false
        },
        email: {
          type: String,
          required: true,
          allowNull: false,
          unique: true
        },
        password: {
          type: String,
          required: true
        },
        status: {
          type: String,
          required: true,
          alloNull: false
        }
      },
      {
        timestamps: {
          createdAt: 'createdAt',
          updatedAt: 'updatedAt'
        }
      }
    )

    this.model = mongoose.model<IUserDocument>('users', userSchema)
  }

  getModel (): Model<IUserDocument> {
    return this.model
  }
}
