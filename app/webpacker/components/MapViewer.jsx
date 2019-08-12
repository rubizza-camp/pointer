import React, { Component } from 'react'
import Pusher from 'pusher-js'
import SimpleMap from './SimpleMap'
import makeNum from '../src/map_helpers'

class MapViewer extends Component {
  state = {}


  componentDidMount() {
    const pusher = new Pusher(process.env.PUSHER_KEY, {
      cluster: process.env.PUSHER_CLUSTER,
      encrypted: true,
    })
    const channel = pusher.subscribe('location')
    channel.bind('new', (data) => {
      this.updateMap(data)
    })
  }


  updateMap = (response) => {
    const { data, included } = response
    const checkins = makeNum(included)
    const lastCheckin = checkins[checkins.length - 1]
    if (window.location.href.includes(data.attributes.uuid)) {
      this.setState({
        checkins,
        center: {
          lat: Number(lastCheckin.lat),
          lng: Number(lastCheckin.lng),
        },
      })
    }
  }

  render() {
    const { center, zoom, checkins } = this.state
    return (
      <SimpleMap
        center={center}
        zoom={zoom}
        checkins={checkins}
      />
    )
  }
}

export default MapViewer
