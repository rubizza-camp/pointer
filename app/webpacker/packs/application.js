import '../src/application.js'

import '../src/trips.coffee.erb'
import Rails from 'rails-ujs'
import Turbolinks from 'turbolinks'

import 'bootstrap/dist/css/bootstrap.css'

$(() => {
  console.log('Hello World from Webpacker')
})

Rails.start()
Turbolinks.start()
