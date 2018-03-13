import Joi from 'joi'
import pkg from './package'


export default {
  pkg,
  dependencies: ['mongo'],
  register(server, options = {}) {
    const { db } = server.plugins['mongo']
    const products = db.get('products')


    server.route({
      method: 'GET',
      path: '/v1/products',
      options: {
        tags: ['api']
      },
      async handler(request, h) {
        return await products.find({})
      }
    })


    server.route({
      method: 'POST',
      path: '/v1/products',
      options: {
        tags: ['api'],
        validate: {
          payload: {
            name: Joi.string().min(3).required(),
            price: Joi.number().min(0).required(),
            description: Joi.string(),
            isActive: Joi.boolean().default(true)
          }
        }
      },
      async handler(request, h) {
        const product = request.payload
        return await products.insert(product)
      }
    })


  }
}
