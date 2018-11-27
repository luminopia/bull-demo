const mainQueue = require('./mainQueue').mainQueue

const jobs = []

if (!process.env.JOB_MESSAGE) console.warn('No JOB_MESSAGE specified, using default test message')
const message = process.env.JOB_MESSAGE || 'Default test message'

// Ordinary, successful, hard-working job
jobs.push(
  mainQueue.add({type: 'good', message})
)

// Bad job with no retry
jobs.push(
  mainQueue.add({type: 'bad'})
)

// Bad job with exponential backoff retry (runner will throw when receiving a job with type 'bad')
jobs.push(
  mainQueue.add({type: 'bad'}, {
    attempts: 5,
    backoff: {
      type: 'exponential',
      delay: 1000, // ms
    }
  })
)

// Job repeats every 10,000 ms
jobs.push(
  mainQueue.add({type: 'bad'}, {
    repeat: {
      every: 10000, // ms
    }
  })
)

Promise.all(jobs).then(process.exit)
