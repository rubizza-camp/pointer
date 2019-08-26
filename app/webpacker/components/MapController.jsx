import React, { Component } from 'react'
import SimpleMap from './SimpleMap'
import { CREATE_TRIP_URL, TRIP_WATCH_URL, CREATE_CHECKINS_URL } from '../constants/api_endpoints'
import { makeNum, makeNums } from '../utils/map_helpers'
import appendToHost from '../utils/url_helper'
import axiosPostRequest from '../utils/axios_helper'

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
    axiosPostRequest(CREATE_TRIP_URL, { lat, lng, name: 'DemoTrip' }, this.generateLink)
  }

  generateLink = (response) => {
    const { data, included } = response.data
    this.setState({
      tripId: data.attributes.id,
      url: appendToHost(`${TRIP_WATCH_URL}/${data.attributes.uuid}`),
      checkins: makeNums(included),
    }, this.updateMap)
  }

  updateMap = () => {
    this.setState(({ startingPoint }) => ({ center: startingPoint }), this.updateCurrentLocation)
  }

  updateCurrentLocation = () => {
    const { tripId, startingPoint } = this.state
    const { lat, lng } = startingPoint
    axiosPostRequest(`${CREATE_TRIP_URL}/${tripId}/${CREATE_CHECKINS_URL}`, { lat, lng }, this.addCheckin)
  }

  addCheckin = (response) => {
    this.setState((prevState) => ({
      checkins: [...prevState.checkins, makeNum(response.data.data.attributes)],
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
