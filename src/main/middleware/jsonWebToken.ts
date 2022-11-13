import * as jsonwebtoken from 'jsonwebtoken'
import { envs } from '../../config/envs/envs'
import { ISendToken } from '../../shared/interfaces/ISendToken.interface'
class Token implements ISendToken {
  constructor (private readonly jwt: typeof jsonwebtoken) {}

  generate (id: string): string {
    return this.jwt.sign({ id }, `${'envs.SECRET_ENV'}`, {
      expiresIn: 500
    })
  }

  async send (): Promise<void> {}
}

export default new Token(jsonwebtoken)
