import axios, { AxiosInstance } from 'axios'
import { envs } from '../../../config/envs/envs'

export const request: AxiosInstance = axios.create({
  baseURL: envs.SERVICE_SEND_EMAIL

})
