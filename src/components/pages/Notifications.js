import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../css/main-content.css'
import '../../css/notification-box.css'
import '../../App.css';
import NotificationBox from '../reusables/NotificationBox'

function Notifications(props) {

    const [findNotifications, setFindNotifications] = useState([])

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now());

        }, 10000);

        return () => clearInterval(interval);
    }, [time]);

    useEffect(() => {
        axios.get('http://localhost:8080/notification/findAll')
            .then((response) => {
                setFindNotifications(response.data)

            })
            .catch((e) => {
                console.log(e)
            })

    }, [time, props.admin])

    const renderContent = () => {
        return (
            <div className='flex-row scroll scroll-content notifications'>
                {
                    findNotifications.map((notification) => {
                        return (
                            <div className=''>
                                <div className=''>
                                    <div className='flex-col notification-box'>
                                        <NotificationBox setActiveNotification={props.setActiveNotification} notification={notification} admin={props.admin} setAdmin={props.setAdmin}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        )
    }

    return (
        <div className='notification-page'>
            {renderContent()}

        </div>


    )
}

export default Notifications