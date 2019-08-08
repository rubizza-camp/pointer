import ReactDOM from "react-dom";

import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    handleApiLoaded = (map, maps, places) => {
        this.setState({map: map})
    };


    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyA-RuM94P5ILZY1eU6vwcJvN3wX0b7tXg0"}}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={this.handleApiLoaded}
                >
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
            zoom: 11

        }
    }

    componentWillMount() {
        setInterval(this.getLocation, 5000)
    }

    render() {
        return (
            <SimpleMap center={this.state.center} map={this.state.map}/>
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
        }, this.createMap)
    };

    createMarker = () => {
        this.setState({
            marker: new google.maps.Marker({
                position: this.state.center,
                map: this.state.map
            })
        })
    }
    createMap = () => {
        this.setState({
            map: new google.maps.Map(document.getElementById('map'), {
                zoom: 18,
                center: this.state.center
            })
        }, this.createMarker)
    };

}


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <MapController/>,

        document.body.appendChild(document.createElement('div'))
        //getElementsByClassName('navbar-collapse')[0].appendChild(document.createElement('div')),
    )
})

