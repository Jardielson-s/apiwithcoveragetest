import { AxiosInstance } from 'axios'
import { IMessage, ISendEmail } from '../../shared/interfaces/ISend-email.interface'

export class SendEmail implements ISendEmail {
  constructor (private readonly request: AxiosInstance) {}
  async send (data: IMessage): Promise<void> {
    try {
      await this.request.post('/email/send',
        {
          from: data.from,
          to: data.to,
          subject: data.subject,
          body: data.body
        })
    } catch (error: any) {
      throw new error(error.message)
    }
  }
}
