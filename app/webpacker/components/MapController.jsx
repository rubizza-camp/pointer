import React, {Component} from 'react'
import axios from 'axios'
import SimpleMap from './SimpleMap'
import {CREATE_TRIP_URL, TRIP_WATCH_URL} from '../src/api_endpoints'
import getToken from '../src/csrf_helper'

class MapController extends Component {

  componentWillMount() {
    this.getLocation()
    this.setState({ timer: setInterval(this.updateMap, 5000) })
  }

  componentWillUnmount() {
    const { timer } = this.state
    clearInterval(timer)
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
      .then((response) => this.setState({
        tripId: response.data.id,
        url: `${window.location.protocol}//${window.location.host}/${TRIP_WATCH_URL}/${response.data.uuid}`,
        checkins: response.data.checkins,
      }, this.updateMap))
  }

  getLocation = (name) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coord = position.coords
        const data = {
          lat: coord.latitude,
          lng: coord.longitude,
          name,
        }
        this.setState({ startingPoint: data }, this.createTrip)
      })
    }
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
      url: `/trips/${tripId}/checkins`,
      method: 'POST',
      headers: {
        'X-CSRF-Token': getToken(),
      },
      data: {
        lat,
        lng,
      },
    })
      .then((response) => this.setState(((prevState) => ({
        checkins: [...prevState.checkins, {
          lat: response.data.lat,
          lng: response.data.lng,
        }],
      }))))
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
