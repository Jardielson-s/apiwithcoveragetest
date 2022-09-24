import { server } from '../restify/restify'
import { adapRouter } from '../adapter/restify.adapter'
import { envs } from '../../config/envs/envs'
import { injectControllerHealthCheck } from '../main.module'

server.get('/health-check', adapRouter(injectControllerHealthCheck))

export const startRestifyServer = () => {
    server.listen(envs.RESTIFY_PORT, () => {
        console.log(`RESTIFY SERVER RUNNING IN PORT: `, envs.RESTIFY_PORT)
    })
}
