import React, { Component } from 'react'
import axios from 'axios'
import SimpleMap from './SimpleMap'
import { CREATE_TRIP_URL, TRIP_WATCH_URL, CREATE_CHECKINS_URL } from '../src/api_endpoints'
import getToken from '../src/csrf_helper'
import makeNum from '../src/map_helpers'

class MapController extends Component {
  constructor(props) {
    super(props)
    this.getLocation()
    this.state.timer = setInterval(this.updateMap, 5000)
  }

  state = { checkins: [] }

  componentWillUnmount() {
    const { timer } = this.state
    clearInterval(timer)
  }

  getLocation = (name) => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position.coords
      const data = {
        lat: coords.latitude,
        lng: coords.longitude,
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
      .then((response) => this.generateLink(response))
  }

  generateLink = (response) => {
    const { data, included } = response.data
    this.setState({
      tripId: data.attributes.id,
      url: `${window.location.protocol}//${window.location.host}/${TRIP_WATCH_URL}/${data.attributes.uuid}`,
      checkins: makeNum(included),
    }, this.updateMap)
  }

  updateMap = () => {
    const { startingPoint } = this.state
    const { lat, lng } = startingPoint
    this.setState({
      center: {
        lat,
        lng,
      },
    }, this.updateCurrentLocation)
  }

  updateCurrentLocation = () => {
    const { tripId } = this.state
    const { startingPoint } = this.state
    const { lat, lng } = startingPoint
    axios({
      url: `${CREATE_CHECKINS_URL}/${tripId}/checkins`,
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
