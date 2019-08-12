import GoogleMapReact from 'google-map-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Marker from './Marker'

const DEFAULT_CENTER = {
  lat: 59.95,
  lng: 30.33,
}
const DEFAULT_ZOOM = 18

class SimpleMap extends Component {
  makeNum = (arr) => {
    let newArr = []
    arr.forEach((element) => {
      newArr = [...newArr, {
        lat: Number(element.lat),
        lng: Number(element.lng),
      }]
    })
    return newArr
  }


  render() {
    const { url, center, zoom, checkins } = this.props
    const { lat, lng } = center
    return (
      <div style={{
        height: '100vh',
        width: '100%',
      }}
      >
        <a href={url}>
          {url}
        </a>
        <GoogleMapReact
          center={center}
          zoom={zoom}
          bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
          onGoogleApiLoaded={({ map, maps }) => new maps.Polyline({
            path: this.makeNum(checkins),
            geodesic: true,
            strokeColor: '#33BD4E',
            strokeOpacity: 1,
            strokeWeight: 5,
          }).setMap(map)}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    )
  }
}

SimpleMap.propTypes = {
  url: PropTypes.string,
  center: PropTypes.object,
  zoom: PropTypes.number,
  checkins: PropTypes.array,


}
SimpleMap.defaultProps = {
  center: DEFAULT_CENTER,
  zoom: DEFAULT_ZOOM,
  checkins: [],
  url: '',
}

export default SimpleMap
