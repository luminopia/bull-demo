var Queue = require('bull')

var mainQueue = new Queue('main', {redis: {
  host: '127.0.0.1',
  port: 6379,
}})

module.exports = {mainQueue}
