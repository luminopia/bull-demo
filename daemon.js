const mainQueue = require('./queue').createMainQueueClient()
const {handleJob, jobName} = require('./jobs/email')

mainQueue.process(jobName, (job) => {
  console.log('Received job', jobName, job.id, 'with data', job.data)
  handleJob(job)
});

mainQueue.isReady()
  .then(() => console.log('Processing from mainQueue'))
