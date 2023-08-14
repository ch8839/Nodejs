const path = require('path')
const fs = require('fs')


function fn1() {
  let res = path.resolve( fs.realpathSync('.'),'server.config' )
  console.log('res:', res)
}


module.exports = fn1

