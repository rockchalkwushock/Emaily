/* eslint-disable no-console */
import mongoose from 'mongoose'

export default conf => {
  mongoose.Promise = global.Promise
  // must pass following option to get rid of deprecation logs.
  mongoose.connect(conf, { useMongoClient: true })
}
