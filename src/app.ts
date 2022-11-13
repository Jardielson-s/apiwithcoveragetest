import { startServerExpress } from './main/routes/express.routes'

export const startApp = async () => {
  // await startRestifyServer()
  await startServerExpress()
}
