import { Model } from 'mongoose'
import { UserRepository } from './user.repository'

const stub = Object.freeze({
  create: jest.fn(),
  findById: jest.fn(),
  findOne: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  remove: jest.fn()
})

const repositoryStub = () => stub as unknown as Model<any>

describe(UserRepository.name, () => {
  let userRepository: UserRepository
  let model: Model<any>

  beforeEach(() => {
    model = repositoryStub()
    userRepository = new UserRepository(model)
  })

  it('should be defined', () => {
    expect(userRepository).toBeDefined()
  })

  it('should be defined method save', async () => {
    const modelSpyOn = jest.spyOn(model, 'create')
    await userRepository.save({} as any)
    expect(modelSpyOn).toHaveBeenCalled()
  })

  it('should be defined method findById', async () => {
    const modelSpyOn = jest.spyOn(model, 'findById')
    await userRepository.findById('d51f33450af2400fa83e374b55573543')
    expect(modelSpyOn).toHaveBeenCalled()
  })

  it('should be defined method findByEmail', async () => {
    const modelSpyOn = jest.spyOn(model, 'findOne')
    await userRepository.findByEmail('email')
    expect(modelSpyOn).toHaveBeenCalled()
  })

  it('should be defined method findByIdAndUpdate', async () => {
    const modelSpyOn = jest.spyOn(model, 'findByIdAndUpdate')
    await userRepository.update({} as any, 'any-id')
    expect(modelSpyOn).toHaveBeenCalled()
  })

  it('should be defined method delete', async () => {
    const modelSpyOn = jest.spyOn(model, 'remove')
    await userRepository.delete('any-id')
    expect(modelSpyOn).toHaveBeenCalled()
  })
})
