$(function () {
    console.log('Hello World from Webpacker');
});
import '../src/application.js';

import '../src/trips.coffee.erb';
import Rails from 'rails-ujs';
import Turbolinks from 'turbolinks';

Rails.start();
Turbolinks.start();

import 'bootstrap/dist/js/bootstrap';
// import 'semantic-ui-react@0.81.2'
