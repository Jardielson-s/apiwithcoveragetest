export interface IMessage {
  from: string
  to: string
  subject: string
  body: string
}
export interface ISendEmail<T=any | IMessage> {
  send: (...args: T[]) => Promise<void>
}
