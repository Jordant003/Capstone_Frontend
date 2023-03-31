import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import React from 'react'
import { useNavigate } from 'react-router'
import '../../css/notification-box.css'
import Moment from 'react-moment'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import axios from 'axios'

function NotificationBox(props) {

    console.log(props.activeNotification)
    const center = {
        lat: props.notification.lat,
        lng: props.notification.lng
    };

    const containerStyle = {
        width: '100%',
        height: '100%',
    };

    const navigator = useNavigate()

    const setNotification = () => {
        props.setActiveNotification(props.notification)
        navigator('/UserLocation')
    }

    const deleteHandler = (e) => {
        const notificationId = e.target.value
        axios.post(`http://localhost:8080/notification/delete/${notificationId}`, props.admin)
        .then((response) => { 
          props.setAdmin(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
  
      }

    return (
        <div className=''> 
            <div className='flex-col relative'>
            <button className='x-button' value={props.notification.id} onClick={deleteHandler} >X</button> 
                <div className='flex-col'>
                    SUSPECT RACE: {props.notification.race} 
                </div>
                <div className='flex-col'>
                    SUSPECT GENDER: {props.notification.gender}
                </div>
                <div className='flex-col'>
                    NUMBER OF SUSPECTS: {props.notification.numberOfSuspects}
                </div>
                <div className='flex-col'>
                    WEAPON TYPE: {props.notification.weapon}
                </div>
                <div className='flex-col'>
                    FLOOR: {props.notification.floor}
                </div>
                <div className='flex-col'>
                    BUILDING LOCATION: {props.notification.buildingLocation}
                </div>
                <div className='flex-col'>
                    SHIRT COLOR: {props.notification.shirtColor}
                </div>
                <div className='flex-col'>
                    PANTS COLOR: {props.notification.pantColor}
                </div>
                <div className='flex-col'>
                    DATE/TIME: <Moment format="MM/DD/YYYY h:mm:ss">{props.notification.dateCreated}</Moment>
                </div>
                <div className='map' onClick={setNotification}>
                    <LoadScript googleMapsApiKey="AIzaSyBz_wc0WGzbCDOykwyabBTLSwMcJ4mBsrU">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={18}
                            mapTypeId='hybrid'
                            tilt={45}
                            
                    >
                        <Marker onClick={props.setMarker}
                            position={{
                                lat: props.notification.lat,
                                lng: props.notification.lng
                            }}
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
        </div >
    )
}

export default NotificationBox