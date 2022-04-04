'use strict'

const { updateOne, readOne } = require('../../model/index_orders.js')

module.exports = async function (app, opts) {
  app.patch('/:id/status', async function (request, reply) {
    const result = await updateOne(this.mongo, request.params.id, request.body)
    const newRes = await readOne(this.mongo, request.params.id)

    console.log(request.params.id)

    if(!result){
      reply
        .code(404) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send({error : "Not Found"})
    }else{
      reply
        .code(201) //상태코드 보내는 메소드
        .header('Content-Type', 'application/json')
        .send(newRes)
    }
  })
}
