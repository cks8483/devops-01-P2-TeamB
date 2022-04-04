'use strict'


module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    //return { root: true }
    reply
      .code(200)
      .send("hello world")
  })
}
