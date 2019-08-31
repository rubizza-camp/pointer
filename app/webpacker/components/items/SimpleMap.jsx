import GoogleMapReact from 'google-map-react'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Marker from './Marker'

const DEFAULT_CENTER = {
  lat: 59.95,
  lng: 30.33,
}
const DEFAULT_ZOOM = 18

const MapWrapper = styled.div`
 height: 100vh;
 width: 100%;
`
const SimpleMap = (props) => {
  const { url, center, zoom, checkins } = props
  const { lat, lng } = center
  return (
    <MapWrapper>
      <a href={url}>
        {url}
      </a>
      <GoogleMapReact
        center={center}
        zoom={zoom}
        bootstrapURLKeys={{ key: process.env.MAPS_API_KEY }}
        onGoogleApiLoaded={({ map, maps }) => {
          new maps.Polyline({
            path: checkins,
            geodesic: true,
            strokeColor: '#33BD4E',
            strokeOpacity: 1,
            strokeWeight: 5,
          }).setMap(map)
        }}
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </MapWrapper>
  )
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
