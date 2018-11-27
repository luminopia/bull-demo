const mainQueue = require('./queue').createMainQueueClient()

mainQueue.empty()
  .then(process.exit)
