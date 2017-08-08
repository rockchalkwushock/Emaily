require('dotenv-safe').load()

const devConfig = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID_DEV,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET_DEV,
  MONGO_URI: process.env.MONGO_URI_DEV
}

const prodConfig = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID_PROD,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET_PROD,
  MONGO_URI: process.env.MONGO_URI_PROD
}

const testConfig = {
  MONGO_URI: process.env.MONGO_URI_DEV
}

const defaultConfig = {
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  PORT: process.env.PORT || 5000,
  STRIPE_SECRET: process.env.STRIPE_SECRET
}

/**
 * configureEnvironment(arg)
 *
 * @param {String} env - process.env.NODE_ENV
 * @returns {Object} config - config object based on current environment.
 */
const configureEnvironment = env => {
  switch (env) {
    case 'development':
      return devConfig
    case 'test':
      return testConfig
    default:
      return prodConfig
  }
}

/**
 * Export our default environment configurations along
 * with whatever configurations are returned specifically
 * based on the current NODE_ENV of the server.
 */
export default {
  ...defaultConfig,
  ...configureEnvironment(process.env.NODE_ENV)
}
