import { IHttpResponse } from './IHttpResponse.interface'

export interface IController<T = unknown> {
    handler: (args: T) => Promise<IHttpResponse>
}
