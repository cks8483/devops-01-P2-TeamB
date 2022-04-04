const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readAll: async (mongo) => {
    //User가 선택한 모든 항목 조회
    const collection = mongo.db.collection('order')
    const result = await collection.find().toArray()

    return result
  },
  updateOne: async (mongo, id, body) => {
    //폐기된 함수
    const collection = mongo.db.collection('order')
    const result = await collection.findOneAndUpdate({
      _id: ObjectId(id)
    }, {
      $set: body
    })
    return result
  },
}