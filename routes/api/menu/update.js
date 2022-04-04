'use strict'

const { ObjectId } = require('fastify-mongodb')
const { updateOne } = require('../../../model/index_menu.js')
const { readOne } = require('../../../model/index_menu.js')

module.exports = async function (app, opts) {
  app.put('/:id', async function (request, reply) {
    const tmpId = '624b7fad532f4695fe317913'

    const getId = await readOne(this.mongo, tmpId, request.params.id)
    request.body._id = ObjectId(getId.menu[0]._id)

    const result = await updateOne(this.mongo, tmpId, request.params.id, request.body)
    const newRes = await readOne(this.mongo, tmpId, request.params.id)

    if(!newRes){
        reply
        .code(404) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send({error : "Not Found"}) //데이터베이스에서 꺼내와야 함
    }else{
        reply
        .code(200) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send(newRes.menu[0]) //데이터베이스에서 꺼내와야 함
    }
  })
}