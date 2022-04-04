'use strict'

const {createOne, updateOne, deleteOne } = require('../../../model/index_menu.js')
const user = require('../../../model/index_menu.js')

module.exports = async function (fastify, opts) {
   
    //메뉴추가 (post/) 
     fastify.post('/', async function (request, reply){
       const createresult = await createOne(this.mongo, request.body)
       
      reply
        .code(201)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            _id: createresult.id,
            name: createresult.name,
            price : createresult.price})
        })
  
    //메뉴 변경(put/:id) 
      fastify.put('/:id', async function (request, reply){
        const putresult = await updateOne(this.mongo, request.params.id, request.body)
        
       console.log("result :", request.params.id);
        
        reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({
                _id: putresult.id,
                name: putresult.name,
                price : putresult.price})
                }
      )
    //메뉴 삭제(delete/:id)
        fastify.delete('/:id', async function(request, reply){
          const result = await deleteOne(this.mongo, request.params.id)
        console.log("result : ", result)
        if(result.value!=null){
          reply
            .code(204)
            .header('content-type', 'application/json')
         }
        })
  
  }