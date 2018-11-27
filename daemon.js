const mainQueue = require('./mainQueue').mainQueue

mainQueue.process((job, done) => {
  console.log('Received job', job.id, 'with data', job.data)

  done()
});

mainQueue.isReady()
  .then(() => console.log('Processing from mainQueue'))
