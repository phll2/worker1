const handleRequest = require('./fetchEL')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
