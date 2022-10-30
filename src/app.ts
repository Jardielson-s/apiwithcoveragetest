import { startServerExpress } from './main/routes/express.routes'
import { startRestifyServer } from './main/routes/restify.routes'

export const startApp = async () => {
    // await startRestifyServer()
    await startServerExpress()
}
