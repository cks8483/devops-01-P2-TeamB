
const {createOne} = require('../../../model/index_restaurant.js')

module.exports = async function (app, opts) {
   
app.post('/', async function (request, reply){
    const result = await createOne(this.mongo, request.body)

   
   reply
     .code(201)
     .header('Content-Type', 'application/json; charset=utf-8')
     .send(result)
    })
}