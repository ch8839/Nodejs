const eat = require('./eat')
const run = require('./run')

function main() {
  const list = [1, 2, 4]
  const cloneList = [...list]
  eat()
  run()

  const User = {
    name: 'Tom',
    getName: () => {
      return this.name
    },
  }

  return User
}
