const {EmailJob} = require('./jobs/email')
const mainQueue = require('./queue').createMainQueueClient()

if (!process.env.EMAIL_MESSAGE) console.warn('No EMAIL_MESSAGE specified, using default test message')
const message = process.env.JOB_MESSAGE || 'Default test message'

const job = new EmailJob(message)

job.enqueue(mainQueue)
  .then(process.exit)
