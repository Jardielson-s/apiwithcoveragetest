import mongoose, { Mongoose } from 'mongoose'
import { envs } from '../../../../config/envs/envs'

export const getMongoose = async (): Promise<Mongoose> => {
  await mongoose.connect(`${envs.MONGO_URI}`)

  console.log(`CONNECTED MONGO URI: ${envs.MONGO_URI}`)

  return mongoose
}
