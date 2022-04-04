'use strict'

const { ObjectId } = require('fastify-mongodb')
const { readMyRestaurant, createOne } = require('../../../model/index_menu.js')

module.exports = async function (app, opts) {
  app.post('/', async function (request, reply) {
    const tmpId = '624b7fad532f4695fe317913'
    const curBody = await readMyRestaurant(this.mongo, tmpId)
    
    request.body._id = ObjectId()
    const newBody = { ...curBody, menu : [ ...curBody.menu, request.body ]}

    const result = await createOne(this.mongo, tmpId, newBody)
    const newRes = await readMyRestaurant(this.mongo, tmpId)

    if(!result){
        reply
        .code(404) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send({error : "Not Found"}) //데이터베이스에서 꺼내와야 함
    }else{
        reply
        .code(200) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send(newRes) //데이터베이스에서 꺼내와야 함
    }
  })
}