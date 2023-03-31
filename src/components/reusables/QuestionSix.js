import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'

function QuestionSix(props) {

    const [buildingLocation, setBuildingLocation] = useState("")


    const clickHandler = () => {
        const body = {
            ...props.notifications,
            buildingLocation: buildingLocation
        }
        axios.post(`http://localhost:8080/notification/create`, body)
            .then((response) => {
                localStorage.setItem("buildingLocation", response.data.race)
                props.setNotifications(response.data)
                props.setStep(7)



            })
            .catch((e) => {
                console.log(e)
            })


    }

    const changeHandler = (e) => {
        setBuildingLocation(e.target.value)
    }

    return (
        <div className='flex-col radio-toolbar'>
            <input checked={buildingLocation === "north"} type="radio" id='north' value={"north"} onChange={changeHandler} />
            <label htmlFor="north">NORTH</label>
            <input checked={buildingLocation === "east"} type="radio" id='east' value={"east"} onChange={changeHandler} />
            <label htmlFor="east">EAST</label>
            <input checked={buildingLocation === "south"} type="radio" id='south' value={"south"} onChange={changeHandler} /> 
            <label htmlFor="south">SOUTH</label>
            <input checked={buildingLocation === "west"} type="radio" id='west' value={"west"} onChange={changeHandler} /> 
            <label htmlFor="west">WEST</label>
            <input checked={buildingLocation === "unknown"} type="radio" id='unknown' value={"unknown"} onChange={changeHandler} />
            <label htmlFor="unknown">UNKNOWN</label>
            <button className='next-button' onClick={clickHandler}>NEXT</button>
            <FontAwesomeIcon className='back-button' onClick={() => {props.setStep(5)}} icon={faBackward} />
        </div>
    )
}


export default QuestionSix