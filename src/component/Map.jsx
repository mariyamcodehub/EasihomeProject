import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '350px',
    height: '250px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const MapComponent = () => {
    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
            {/* Replace "YOUR_API_KEY" with your actual Google Maps API key. */}
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}

export default MapComponent;
