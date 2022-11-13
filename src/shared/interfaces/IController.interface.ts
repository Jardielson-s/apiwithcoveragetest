import { IHttpResponse } from './IHttpResponse.interface'

export interface IController<T = any> {
  handler: (args: T) => Promise<IHttpResponse>
}
