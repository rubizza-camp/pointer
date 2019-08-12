const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
const dotenv = require('dotenv')
const erb = require('./loaders/erb')
const coffee = require('./loaders/coffee')

const dotenvFiles = [
  `.env.${process.env.NODE_ENV}.local`,
  '.env.local',
  `.env.${process.env.NODE_ENV}`,
  '.env',
]


environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default'],
}))

environment.loaders.prepend('erb', erb)
environment.loaders.prepend('coffee', coffee)
dotenvFiles.forEach((dotenvFile) => {
  dotenv.config({ path: dotenvFile, silent: true })
})

environment.plugins.prepend('Environment', new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(process.env))))

module.exports = environment
