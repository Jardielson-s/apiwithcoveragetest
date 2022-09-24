import server from './main/routes/restify.routes'

export const startApp = () => {
    server.listen(8080)
}
