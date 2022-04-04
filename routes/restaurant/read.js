'use strict'

const { readAll } = require('../../model/index_restaurant.js')

module.exports = async function (app, opts){
    app.get('/', async function (request, reply){
        const result = await readAll(this.mongo)

        if(!result){
            reply
                .code(404)
                .header('content-type', 'application/json')
                .send({error : "Not Found"})
        }
        else{
            reply
                .code(200)
                .header('content-type', 'application/json')
                .send(result)
        }
    })
}