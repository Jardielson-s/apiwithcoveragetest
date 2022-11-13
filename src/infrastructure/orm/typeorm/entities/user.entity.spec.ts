import { User } from './user.entity'

describe(User.name, () => {
  let user: User

  beforeEach(() => {
    user = new User()
  })
  it('should be defined', () => {
    expect(user).toBeDefined()
  })
})
