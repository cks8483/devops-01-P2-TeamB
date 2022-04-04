'use strict'

const {createOne, updateOne, deleteOne } = require('../../model/index_menu.js')
const user = require('../../model/index_menu.js')

module.exports = async function (fastify, opts) {
   
    //메뉴추가 (post/) 
     fastify.post('/', async function (request, reply){
       const createresult = await createOne(this.mongo, request.body)

      
      reply
        .code(201)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            _id: request.body._id,
            name: request.body.name,
            price : request.body.price})
        })
  
    //메뉴 변경(put/:id) 
      fastify.put('/:_id', async function (request, reply){
        const putresult = await updateOne(this.mongo, request.params._id, request.body)
        
       console.log("result :", request.params._id);
        
        reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({
                _id: request.params._id,
                name: request.body.name,
                price : request.body.price})
                }
      )
    //메뉴 삭제(delete/:id)
        fastify.delete('/:_id', async function(request, reply){
        const deleteresult = await deleteOne(this.mongo, request.params.id)
        console.log("result : ", deleteresult)
        reply
            .code(204)
            .header('Content-Type', 'application/json; charset=utf-8')
            
        }
      )
  
  }