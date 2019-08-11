import ReactDOM from "react-dom";

import React, {Component} from 'react';
import Pusher from 'pusher-js'
import SimpleMap from "./SimpleMap";
class MapsViewer extends React.Component {
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

    componentDidMount() {
        const pusher = new Pusher(process.env.PUSHER_KEY, {
            cluster: process.env.PUSHER_CLUSTER,
            encrypted: true
        });
        const channel = pusher.subscribe('location');
        channel.bind('new', (data) => {
            this.updateMap(data);
        });

    }

    render() {
        return (
            <SimpleMap center={this.state.center} map={this.state.map} zoom={this.state.zoom}
                       url={this.state.url} trip_id={this.state.trip_id}
                       checkins={this.state.checkins} key={this.state.checkins}/>
        );
    }


    updateMap = (data) => {
        const lastCheckin = data.checkins[data.checkins.length-1]
        console.log(data)
        if(window.location.href.includes(data.uuid))
        {
            this.setState({checkins: data.checkins, center: {lat: Number(lastCheckin.lat), lng: Number(lastCheckin.lng)}})
        }


    };

}
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <MapsViewer />,

        document.body.appendChild(document.createElement('div'))
    )
})
