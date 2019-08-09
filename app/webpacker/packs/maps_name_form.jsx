import ReactDOM from "react-dom";

import React from 'react';
import axios from 'axios'
import SimpleMap from "./SimpleMap";

/*class NameForm extends React.Component {
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
}*/

class MapController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 18,
        }
    }


    componentWillMount() {
        this.getLocation()
        this.setState({ timer: setInterval(this.updateMap, 5000)})

    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    createTrip = () => {
        axios({
            url: "/trips/",
            method: 'POST',
            headers: {
                'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content
            },
            data: {lat: this.state.startingPoint.lat, lng: this.state.startingPoint.lng, name: "DemoTrip"},

        }).then((response) => this.setState({
            trip_id: response.data.id,
            uuid: response.data.uuid,
            url: window.location.protocol + "//" + window.location.host + "/tripwatcher/" + response.data.uuid,
            checkins: response.data.checkins
        }, this.updateMap))
    }

    render() {
        return (
            <SimpleMap center={this.state.center} map={this.state.map} zoom={this.state.zoom}
                       url={this.state.url} trip_id={this.state.trip_id}
                       checkins={this.state.checkins} key={this.state.checkins}/>
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
                this.setState({startingPoint: data}, this.createTrip)
            })
        }
    }

    updateMap = () => {
        this.setState({
            center: {
                lat: this.state.startingPoint.lat,
                lng: this.state.startingPoint.lng
            }
        }, this.updateCurrentLocation)
    };

    updateCurrentLocation = () => {
        axios({
            url: "/trips/" + this.state.trip_id + "/checkins",
            method: 'POST',
            headers: {
                'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content
            },
            data: {lat: this.state.startingPoint.lat, lng: this.state.startingPoint.lng}
        }).then((response) =>
            this.setState((prevState => ({
                checkins: [...prevState.checkins, {lat: response.data.lat, lng: response.data.lng}]
            })))
        )
    };


}


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <MapController/>,

        document.body.appendChild(document.createElement('div'))
    )
})

