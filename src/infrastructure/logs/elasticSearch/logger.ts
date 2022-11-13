import { createLogger, transports, format } from 'winston'
import { ILoggerService } from 'src/shared/interfaces/ILoggerServices.interface'
import { esTransport } from './config/elastic.config'

export const logger: ILoggerService = createLogger({
  transports: [
    new transports.Console({
      level: 'info',
      format: format.json()
    }),
    esTransport
  ]
})
