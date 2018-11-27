const mainQueue = require('./mainQueue').mainQueue

mainQueue.empty()
  .then(process.exit)
