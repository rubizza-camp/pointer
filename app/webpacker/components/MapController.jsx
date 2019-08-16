import React, { Component } from 'react'
import axios from 'axios'
import SimpleMap from './SimpleMap'
import { CREATE_TRIP_URL, TRIP_WATCH_URL, CREATE_CHECKINS_URL } from '../constants/api_endpoints'
import getToken from '../utils/csrf_helper'
import makeNum from '../utils/map_helpers'
import appendToHost from '../utils/url_helper'

class MapController extends Component {
  state = { checkins: [] }

  componentDidMount() {
    this.getLocation()
    this.timer = setInterval(this.updateMap, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  getLocation = (name) => {
    if (!navigator.geolocation) return

    navigator.geolocation.getCurrentPosition((position) => {
      const data = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        name,
      }
      this.setState({ startingPoint: data }, this.createTrip)
    })
  }

  createTrip = () => {
    const { startingPoint } = this.state
    const { lat, lng } = startingPoint
    axios({
      url: CREATE_TRIP_URL,
      method: 'POST',
      headers: {
        'X-CSRF-Token': getToken(),
      },
      data: {
        lat,
        lng,
        name: 'DemoTrip',
      },

    })
      .then(response => this.generateLink(response))
  }

  generateLink = (response) => {
    const { data, included } = response.data
    this.setState({
      tripId: data.attributes.id,
      url: appendToHost(`${TRIP_WATCH_URL}/${data.attributes.uuid}`),
      checkins: makeNum(included),
    }, this.updateMap)
  }

  updateMap = () => {
    const { startingPoint } = this.state
    const { lat, lng } = startingPoint
    this.setState({ center: { lat, lng } }, this.updateCurrentLocation)
  }

  updateCurrentLocation = () => {
    const { tripId, startingPoint } = this.state
    const { lat, lng } = startingPoint
    axios({
      url: `${CREATE_TRIP_URL}/${tripId}/${CREATE_CHECKINS_URL}`,
      method: 'POST',
      headers: {
        'X-CSRF-Token': getToken(),
      },
      data: {
        lat,
        lng,
      },
    })
      .then((response) => this.addCheckin(response))
  }

  addCheckin = (response) => {
    this.setState((prevState) => ({
      checkins: [...prevState.checkins, {
        lat: Number(response.data.data.attributes.lat),
        lng: Number(response.data.data.attributes.lng),
      }],
    }))
  }


  render() {
    const { center, zoom, url, checkins } = this.state
    return (

      <SimpleMap
        center={center}
        zoom={zoom}
        url={url}
        checkins={checkins}
      />
    )
  }
}

export default MapController
