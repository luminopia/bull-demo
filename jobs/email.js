const jobName = 'email'

class EmailJob {
  constructor(message) {
    this.name = jobName
    this.message = message
  }

  enqueue(queue) {
    console.log(this.name, this.message)
    return queue.add(this.name, {message: this.message})
  }
}

const handleJob = (job) => {
  console.log('lets pretend i sent an email')
}

module.exports = {
  EmailJob,
  jobName,
  handleJob,
}
