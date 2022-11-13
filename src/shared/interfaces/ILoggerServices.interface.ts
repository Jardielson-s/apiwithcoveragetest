export interface ILoggerService<T = string | Object> {
  info: (...args: T[]) => void
}
