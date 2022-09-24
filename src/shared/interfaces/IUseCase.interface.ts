export interface IUseCase<T, K = void | unknown> {
    execute: (...args: T[]) => K
}
