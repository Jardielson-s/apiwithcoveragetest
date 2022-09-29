import * as express from 'express'
// import * as morgan from 'morgan'

const app = express()

app.use(express.json())
// app.use(morgan('combined'))
export default app
