import React from 'react'
import ReactDOM from 'react-dom'
import MapViewer from '../components/MapViewer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MapViewer />,

    document.body.appendChild(document.createElement('div'))
  )
})
