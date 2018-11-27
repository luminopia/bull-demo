const Queue = require('bull')

const host = '127.0.0.1'
const port = 6379
const name = 'main'
const createMainQueueClient = () => (
  new Queue(name, {redis: {
    host,
    port,
  }})
)

module.exports = {
  name,
  host,
  port,
  createMainQueueClient,
}
