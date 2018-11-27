const mainQueue = require('./mainQueue').mainQueue

if (!process.env.JOB_MESSAGE) console.warn('No JOB_MESSAGE specified, using default test message')
const message = process.env.JOB_MESSAGE || 'Default test message'

mainQueue.add({message})
  .then(process.exit)
  .catch((e) => {throw e})
