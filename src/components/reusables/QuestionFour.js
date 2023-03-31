import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'

function QuestionFour(props) {

    const [weapons, setWeapons] = useState("")


    const clickHandler = () => {
        const body = {
            ...props.notifications,
            weapon: weapons
        }
        axios.post(`http://localhost:8080/notification/create`, body)
            .then((response) => {
                localStorage.setItem("suspects", response.data.weapon)
                props.setNotifications(response.data)
                props.setStep(5)


            })
            .catch((e) => {
                console.log(e)
            })


    }

    const changeHandler = (e) => {
        setWeapons(e.target.value)
      }

    return (
        <div className='flex-col radio-toolbar'>
            <input checked={weapons === "pistol"} type="radio" id='pistol' value={"pistol"} onChange={changeHandler}/>
            <label htmlFor="pistol">PISTOL</label>
            <input checked={weapons === "rifle"} type="radio" id='rifle' value={"rifle"} onChange={changeHandler}/>
            <label htmlFor="rifle">RIFLE/LONG GUN</label>
            <input checked={weapons === "knife"} type="radio" id='knife' value={"knife"} onChange={changeHandler}/> 
            <label htmlFor="knife">KNIFE</label>
            <input checked={weapons === "other"} type="radio" id='other' value={"other"} onChange={changeHandler}/> 
            <label htmlFor="other">OTHER</label>
            <input checked={weapons === "unknown"} type="radio" id='unknown' value={"unknown"} onChange={changeHandler}/> 
            <label htmlFor="unknown">UNKNOWN</label>
            <button className='next-button' onClick={clickHandler}>NEXT</button>
            <FontAwesomeIcon className='back-button' onClick={() => {props.setStep(3)}} icon={faBackward} />
        </div>
    )
}

export default QuestionFour