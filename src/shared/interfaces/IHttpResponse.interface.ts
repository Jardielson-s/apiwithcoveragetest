export interface IHttpResponse<T = unknown> {
  body: T
  status: number
}
