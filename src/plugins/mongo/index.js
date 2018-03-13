import pkg from './package'
import Monk from 'monk'

export default {
  pkg,
  register(server, options = {}) {
    const db = Monk(`helio:orange5@ds012578.mlab.com:12578/lego-store`)

    server.expose({
      db
    })

  }
}
