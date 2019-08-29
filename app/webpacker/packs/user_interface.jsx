import React from 'react'
import { render } from 'react-dom'
import PetController from '../components/PetController'

render(<PetController />, document.body.appendChild(document.createElement('div')))
