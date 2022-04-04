'use strict'

const { readOne, updateOne, chkAuthorizationHeaders } = require('../../../model/index_restaurant.js')

module.exports = async function (app, opts){
    app.patch('/', async function (request, reply){
        let tmpId = 'aa'
        if(request.headers.authorization) tmpId = await chkAuthorizationHeaders(request.headers.authorization)

        const result = await updateOne(this.mongo, tmpId, request.body)
        const newRes = await readOne(this.mongo, tmpId)

        if(!result){
            reply
              .code(404) //상태코드 보내는 메소드
              .header('content-type', 'application/json')
              .send({error : "Not Found"})
          }
          else{
            reply
              .code(201) //상태코드 보내는 메소드
              .header('Content-Type', 'application/json')
              .send(newRes)
          }

        } 
    )
}
