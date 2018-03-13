import pkg from './package'
import Monk from 'monk'

export default {
  pkg,
  register(server, options = {}) {
    const db = Monk(options.mongoUri)

    server.expose({
      db
    })

  }
}
