import { getMongoose } from './database/database'
import { UserRepository } from './repositories/user.repository'
import { UserSchema } from './schemas/user.schema'

export const userRepository = async () => {
  return new UserRepository(new UserSchema(await getMongoose()).getModel())
}
