'use strict'

const handleRequest = require('../src/fetchEL')
const Response = require('node-fetch').Response

global.Response = Response
global.someRandomVariable = 'hello there'

test('will work', done => {
  const eventTarget = new EventTarget()
  const event = new Event('fetch')
  event.request = { msg: 'yoyoYO' }

  eventTarget.addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })

  event.respondWith = async response => {
    expect(response.body.toString()).toEqual('Hello!')
    done()
  }

  eventTarget.dispatchEvent(event)
})
