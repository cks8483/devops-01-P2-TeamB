const { ObjectId } = require('fastify-mongodb')

module.exports = {
    createOne: async (mongo, body) => {
        const collection = mongo.db.collection('restaurant')
    
        const result = await collection.insertOne(body)
        return result
      },
  readAll: async (mongo) => {
    //User가 선택한 모든 항목 조회
    const collection = mongo.db.collection('restaurant')
    const result = await collection.find({}).toArray()

    return result
  },
  readOne: async (mongo, id) => {
    const collection = mongo.db.collection('restaurant')
    const result = await collection.findOne({
      _id: ObjectId(id)
    }, { 
        $set: body
    })
    return result
  },
  updateOne: async (mongo, id, body) => {
    //폐기된 함수
    const collection = mongo.db.collection('restaurant')
    const result = await collection.findOneAndUpdate({
      _id: ObjectId(id)
    }, {
      $set: body
    })
    return result
  },
}