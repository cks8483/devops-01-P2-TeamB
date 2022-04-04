'use strict'

const { updateOne } = require('../../model/index_orders.js')

module.exports = async function (app, opts) {
  app.patch('/:id/status', async function (request, reply) {
    const result = await createUserRes(this.mongo, request.params.id, request.body)

    if(!result){
      reply
        .code(404) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send({error : "Not Found"})
    }else{
      reply
        .code(201) //상태코드 보내는 메소드
        .header('Content-Type', 'application/json')
        .send({value : result.value, ok : result.ok})
    }
  })
}
