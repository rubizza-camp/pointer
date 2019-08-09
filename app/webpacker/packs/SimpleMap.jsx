import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import React, {Component} from 'react';
class SimpleMap extends Component {
    static defaultProps = {
        defaultCenter: {
            lat: 59.95,
            lng: 30.33
        },
        defaultZoom: 18
    };

    makeNum = function (arr) {
        arr.forEach(function (arr) {
            arr.lat = Number(arr.lat);
            arr.lng = Number(arr.lng);
        });
        return arr;
    };


    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '100vh', width: '100%'}}>
                <a href={this.props.url}> {this.props.url} </a>
                <GoogleMapReact
                    center={this.props.center}
                    zoom={this.props.zoom}
                    bootstrapURLKeys={{key: "AIzaSyA-RuM94P5ILZY1eU6vwcJvN3wX0b7tXg0"}}
                    onGoogleApiLoaded={({map, maps}) => new maps.Polyline({
                        path: this.makeNum(this.props.checkins),
                        geodesic: true,
                        strokeColor: '#33BD4E',
                        strokeOpacity: 1,
                        strokeWeight: 5
                    }).setMap(map)}
                    yesIWantToUseGoogleMapApiInternals
                >
                    <Marker lat={this.props.center.lat} lng={this.props.center.lng}/>
                </GoogleMapReact>
            </div>
        );
    }
}
export default SimpleMap
