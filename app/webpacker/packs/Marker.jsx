import React, {Component} from 'react';

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
export default Marker
