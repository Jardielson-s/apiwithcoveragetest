export interface ISendToken {
    send: (body: string) => Promise<void>
    generate: (id: string) => string
}
