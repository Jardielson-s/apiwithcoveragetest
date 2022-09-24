export interface IUseCase<T, K = void | any> {
    execute: (...args: T[]) => K
}
