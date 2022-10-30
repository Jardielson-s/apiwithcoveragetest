export interface IRepository<T> {
    save: (data: T) => Promise<T>
    findById: (id: string) => Promise<T | null>
    findByEmail: (email: string) => Promise<T | null>
    update: (data: T, id: string) => Promise<T | null>
    delete: (id: string) => Promise<any>
}
