import * as winstonElasticsearch from 'winston-elasticsearch'
import { envs } from '../../../../config/envs/envs'

const esTransportOpts = {
  level: 'info',
  indexPrefix: 'logging-api',
  indexSuffixPattern: 'YYYY-MM-DD',
  clientOpts: {
    node: envs.ELASTIC_SEARCH,
    maxRetries: 5,
    requestTimeout: 10000,
    sniffOnStart: false,
    auth: {
      username: String(envs.ELASTIC_SEARCH_USER),
      password: String(envs.ELASTIC_SEARCH_PASSWORD)
    }
  },
  source: envs.LOG_SOURCE || 'api'
}

export const esTransport = new winstonElasticsearch.ElasticsearchTransport(
  esTransportOpts
)
