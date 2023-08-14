const run = require('./run')

function eat() {
  console.log('eating')
  run()
}

module.exports = {
  eat,
}
