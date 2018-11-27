const mainQueue = require('./queue').createMainQueueClient()

mainQueue.process((job) => {
  console.log('Received job', job.id, 'with data', job.data)

  if (job.data.type === 'bad') throw new Error("Received job with type 'bad'")
});

mainQueue.isReady()
  .then(() => console.log('Processing from mainQueue'))
