const Arena = require('bull-arena')
const {name: queueName, host: queueHost, port: queuePort} = require('./queue')

const host = 'localhost'
const port = 7000

Arena(
  {
    queues: [
      {
        // Name of the bull queue, this name must match up exactly with what you've defined in bull.
        name: queueName,
        hostId: queueHost,

        // Redis auth.
        redis: {
          host: queueHost,
          port: queuePort,
        },
      },
    ],
  },
  {
    host,
    port,
  }
)

console.log(`You may access the web app at http://${host}:${port}/`)
