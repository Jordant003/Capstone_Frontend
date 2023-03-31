import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../css/questions.css'


function QuestionOne(props) {

    const [race, setRace] = useState("")

    const [userLng, setUserLng] = useState(null)

    const [userLat, setUserLat] = useState(null)

    useEffect((e) => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setUserLat(position.coords.latitude);
            setUserLng(position.coords.longitude);
            
        },
        function (e) {
            console.log(e)
        })
        
    }, [])
    
    const clickHandler = () => {
        console.log(navigator.geolocation.getCurrentPosition)
    
        const body = {
            ...props.notifications,
            race: race,
            lat: userLat,
            lng: userLng

        }
        axios.post(`http://localhost:8080/notification/create`, body)
            .then((response) => {
                localStorage.setItem("race", response.data.race)
                props.setNotifications(response.data)
                props.setStep(2)



            })
            .catch((e) => {
                console.log(e)
            })


    }

    const changeHandler = (e) => {
        setRace(e.target.value)
    }

    return (
        <div title={'SUSPECT COLOR/RACE'}>
            <div className='flex-col radio-toolbar'>
                <input className="radio-button input" checked={race === "white"} id="white" type="radio" value={"white"} onChange={changeHandler} />
                <label htmlFor="white">WHITE</label>
                <input checked={race === "black"} type="radio" id="black" value={"black"} onChange={changeHandler} />
                <label htmlFor="black">BLACK</label>
                <input checked={race === "unknown"} type="radio" id="unknown" value={"unknown"} onChange={changeHandler} />
                <label htmlFor="unknown">UNKNOWN</label>
                <button className='next-button' onClick={clickHandler}>NEXT</button>
            </div>
        </div>
    )
}

export default QuestionOne