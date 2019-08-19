import React, { Component } from 'react'
import Pusher from 'pusher-js'
import SimpleMap from './SimpleMap'
import makeNum from '../utils/map_helpers'
import getToken from '../utils/csrf_helper'
import { PUSHER_AUTH_URL } from '../constants/api_endpoints'

class MapViewer extends Component {
  state = { uuid: window.location.pathname.split('/')[2] }

  componentDidMount() {
    this.pusher = new Pusher(process.env.PUSHER_KEY, {
      cluster: process.env.PUSHER_CLUSTER,
      encrypted: true,
      authEndpoint: PUSHER_AUTH_URL,
      auth: {
        headers: {
          'X-CSRF-Token': getToken(),
        },
      },
    })
    const { uuid } = this.state
    const channel = this.pusher.subscribe(`private-location-${uuid}`)
    channel.bind('new', this.updateMap)
  }

  componentWillUnmount() {
    const { uuid } = this.state
    this.pusher.unsubscribe(`private-location-${uuid}`)
  }

  updateMap = (response) => {
    const { included } = response
    const checkins = makeNum(included)
    const lastCheckin = checkins[checkins.length - 1]
    this.setState({
      checkins,
      center: {
        lat: Number(lastCheckin.lat),
        lng: Number(lastCheckin.lng),
      },
    })
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
