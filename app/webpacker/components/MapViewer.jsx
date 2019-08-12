import React, { Component } from 'react'
import Pusher from 'pusher-js'
import SimpleMap from './SimpleMap'

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


  updateMap = (data) => {
    const lastCheckin = data.checkins[data.checkins.length - 1]

    if (window.location.href.includes(data.uuid)) {
      this.setState({
        checkins: data.checkins,
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
