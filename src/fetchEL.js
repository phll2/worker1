'use strict'

// const aes = require('crypto-js/aes')

module.exports = request => {
  console.log(request)
  console.log(someRandomVariable)

  // const test = aes
  //   .encrypt('abc', 'secret')
  //   .toString()

  return new Response('Hello!', {
    headers: { 'content-type': 'text/plain' }
  })
}
