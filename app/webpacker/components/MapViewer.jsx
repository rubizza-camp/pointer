import React, { Component } from 'react'
import Pusher from 'pusher-js'
import SimpleMap from './SimpleMap'
import { makeNum, makeNums } from '../utils/map_helpers'
import getToken from '../utils/csrf_helper'
import { PUSHER_AUTH_URL } from '../constants/api_endpoints'

class MapViewer extends Component {
  state = {}

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
    const channel = this.pusher.subscribe(this.generateChannelName())
    channel.bind('new', this.updateMap)
  }

  componentWillUnmount() {
    this.pusher.unsubscribe(this.generateChannelName())
  }

  generateChannelName = () => `private-location-${window.location.pathname.split('/')[2]}`

  updateMap = (response) => {
    const { included } = response
    const checkins = makeNums(included)
    const lastCheckin = checkins[checkins.length - 1]
    this.setState({
      checkins,
      center: makeNum(lastCheckin.lat, lastCheckin.lng),
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
