const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readAll: async (mongo) => {
    //User가 선택한 모든 항목 조회
    const collection = mongo.db.collection('order')
    const result = await collection.find({}, { projection : { consumer_id : 0, restaurant : 0 }}).toArray()

    console.log(result)
    return result
  },
  readOne: async (mongo, id) => {
    const collection = mongo.db.collection('order')
    const result = await collection.findOne({
      _id: ObjectId(id)
    }, { projection : { consumer_id : 0, restaurant : 0 }})
    return result
  },
  updateOne: async (mongo, id, body) => {
    //폐기된 함수
    const collection = mongo.db.collection('order')
    const result = await collection.findOneAndUpdate({
      _id: ObjectId(id)
    }, {
      $set: { "deliveryInfo.status" : body.status}
    })
    return result
  },
}