'use strict'

const aes = require('crypto-js/aes')

module.exports = request => {
  const aesTest = aes
    .encrypt('abc', 'secret')
    .toString()

  console.log(request)
  console.log(someRandomVariable)
  console.log(aesTest)

  return new Response('Hello!', {
    headers: { 'content-type': 'text/plain' }
  })
}
