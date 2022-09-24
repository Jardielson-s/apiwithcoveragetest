import { startRestifyServer } from './main/routes/restify.routes'

export const startApp = async () => {
    await startRestifyServer()
}
