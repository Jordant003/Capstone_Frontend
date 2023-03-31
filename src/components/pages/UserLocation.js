import { GoogleMap, Marker, LoadScript, InfoBox, InfoWindow } from '@react-google-maps/api'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NotificationBox from '../reusables/NotificationBox';
import '../../css/info-box.css'

function UserLocation(props) {

    const [marker, setMarker] = useState(null)

    console.log(props.activeNotification)
    const center = {
        lat: props.activeNotification.lat,
        lng: props.activeNotification.lng
    };

    const containerStyle = {
        width: '100%',
        height: '100%',

    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyBz_wc0WGzbCDOykwyabBTLSwMcJ4mBsrU">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
                mapTypeId='hybrid'
                tilt={45}
            >
                <Marker onClick={setMarker}
                    position={{
                        lat: props.activeNotification.lat,
                        lng: props.activeNotification.lng
                    }}
                />
                {marker ? (
                    <InfoWindow setActiveNotification={props.setActiveNotification}
                        position={{
                            lat: props.activeNotification.lat,
                            lng: props.activeNotification.lng
                        }}
                    >
                        <div className='flex-col info-box'>
                            <div>Location: {props.activeNotification.buildingLocation}</div>
                            <div>Floor: {props.activeNotification.floor}</div>
                            <div>{props.activeNotification.lat}</div>
                            <div>{props.activeNotification.lng}</div>
                        </div>
                    </InfoWindow>
                ) : null}
            </GoogleMap>
        </LoadScript>
    )
}

export default UserLocation