import ReactDOM from "react-dom";

import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios'
import Pusher from 'pusher-js'

const AnyReactComponent = ({text}) => <div>{text}</div>;
// Marker component
const Marker = (props) => {
    const markerStyle = {
        border: '1px solid white',
        borderRadius: '50%',
        height: 10,
        width: 10,
        backgroundColor: props.show ? 'red' : 'blue',
        cursor: 'pointer',
        zIndex: 10,
    };

    return (
        <>
            <div style={markerStyle}/>
            {props.show && <InfoWindow place={props.place}/>}
        </>
    );
};

class SimpleMap extends Component {
    static defaultProps = {
        defaultCenter: {
            lat: 59.95,
            lng: 30.33
        },
        defaultZoom: 11
    };

    handleApiLoaded = (map, maps, places) => {
        this.setState({map: map})
    };


    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    center={this.props.center}
                    zoom={this.props.zoom}
                    bootstrapURLKeys={{key: "AIzaSyA-RuM94P5ILZY1eU6vwcJvN3wX0b7tXg0"}}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={this.handleApiLoaded}
                >
                    <Marker lat={this.props.center.lat} lng={this.props.center.lng} text="HELLO"/>
                </GoogleMapReact>
            </div>
        );
    }

}

export default SimpleMap;

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', name: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className="form-inline name-form" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" required placeholder="Enter your name"
                       aria-label="name" onChange={this.handleChange}>
                </input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Share Location</button>
            </form>


        );
    }

}

class MapController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 18

        }
    }

    componentWillMount() {
        setInterval(this.getLocation, 5000)
    }

    render() {
        return (
            <SimpleMap center={this.state.center} map={this.state.map} zoom={this.state.zoom} key={this.state.center}/>
        );
    }

    getLocation = (name) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                var coord, data, timestamp;
                coord = position.coords;
                timestamp = position.timestamp;
                data = {
                    lat: coord.latitude,
                    lng: coord.longitude,
                    name: name
                };
                console.log(data)
                console.log(this.state)
                //startingPoint = data;
                //return saveTrip(data);
                this.setState({startingPoint: data}, this.updateMap)
            })
        }
    }

    updateMap = () => {
        //console.log(checkin);
        //lastCheckin = checkin[checkin.length - 1];
        this.setState({
            center: {
                lat: this.state.startingPoint.lat,
                lng: this.state.startingPoint.lng
            }
        }, this.updateCurrentLocation)
    };

    updateCurrentLocation = () => {
        axios({
            url: "/trips/" + 105 + "/checkins",
            method: 'POST',
            headers: {
                'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content
            },
            data: {lat: this.state.startingPoint.lat, lng: this.state.startingPoint.lng},
            success: function (response) {
                console.log(response)
            }
        }).then()
    };


}


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <MapController/>,

        document.body.appendChild(document.createElement('div'))
        //getElementsByClassName('navbar-collapse')[0].appendChild(document.createElement('div')),
    )
})

