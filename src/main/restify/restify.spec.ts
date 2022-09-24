import { server } from './restify'

describe('Restify CrateServer', () => {
    it('should be defined', () => {
        expect(server).toBeDefined()
    })
})
