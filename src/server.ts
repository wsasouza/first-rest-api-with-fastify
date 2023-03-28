import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionsRoutes)

app
  .listen({
    port: 3334,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
