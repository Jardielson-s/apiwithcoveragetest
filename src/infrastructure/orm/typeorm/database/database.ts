import 'reflect-metadata'
import { envs } from '../../../../config/envs/envs'
import { DataSource } from 'typeorm'

import { User } from '../entities/user.entity'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: envs.MYSQL_DB_HOST,
    port: 3306,
    username: envs.MYSQL_DB_USER,
    password: envs.MYSQL_DB_PASSWORD,
    database: envs.MYSQL_DB_NAME,
    entities: [User],
    synchronize: true,
    logging: false,
})
