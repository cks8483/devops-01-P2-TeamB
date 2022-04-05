'use strict'

const { ObjectId } = require('fastify-mongodb')
const { deleteOne } = require('../../../model/index_menu.js')
const { readOne } = require('../../../model/index_menu.js')

module.exports = async function (app, opts) {
  app.delete('/:id', async function (request, reply) {
    const tmpId = '624b7fad532f4695fe317913'
    const getId = await readOne(this.mongo, tmpId, request.params.id)
    
    const result = await deleteOne(this.mongo, tmpId, request.params.id)

    if(!result){
        reply
        .code(404) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send({error : "Not Found"}) //데이터베이스에서 꺼내와야 함
    }else{
        reply
        .code(204) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send({ok : "ok"}) //데이터베이스에서 꺼내와야 함
    }
  })
}