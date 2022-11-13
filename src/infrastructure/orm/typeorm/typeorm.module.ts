import { AppDataSource } from './database/database'
import { UserRepository } from './repository/user.repository'

export const getUserRepository = async () => {
  return new UserRepository(await AppDataSource.initialize())
}
