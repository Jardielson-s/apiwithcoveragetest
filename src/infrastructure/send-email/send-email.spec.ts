import { AxiosStatic } from 'axios'
import { SendEmail } from './send-email'

const stub = Object.freeze({
  post: jest.fn()
})
const requestStub = (): any => stub as unknown as AxiosStatic

describe(SendEmail.name, () => {
  let sendEmail: SendEmail
  let request: AxiosStatic

  beforeEach(() => {
    request = requestStub()
    sendEmail = new SendEmail(request)
  })

  it('should be defined', () => {
    expect(sendEmail).toBeDefined()
  })

  it('should able execute send when call', async () => {
    const requestSpyOne = jest.spyOn(request, 'post')
    await sendEmail.send({} as any)
    expect(requestSpyOne).toHaveBeenCalled()
  })

  it('should able execute with Throw error send when call', async () => {
    jest.spyOn(request, 'post').mockRejectedValue({} as any)
    await expect(sendEmail.send({} as any)).rejects.toThrow()
  })
})
