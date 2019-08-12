import React from 'react'
import ReactDOM from 'react-dom'
import MapController from '../components/MapController'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MapController />,

    document.body.appendChild(document.createElement('div'))
  )
})
