import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'
import '../../css/questions.css'

function QuestionTwo(props) {
    const [gender, setGender] = useState("")


    const clickHandler = () => {
        const body = {
            ...props.notifications,
            gender: gender
        }
        axios.post(`http://localhost:8080/notification/create`, body)
            .then((response) => {
                localStorage.setItem("gender", response.data.race)
                props.setNotifications(response.data)
                props.setStep(3)
                


            })
            .catch((e) => {
                console.log(e)
            })


    }

    const changeHandler = (e) => {
        setGender(e.target.value)
      }

    return (
        <div className='flex-col radio-toolbar'>
            <input checked={gender === "male"} type="radio" id="male" value={"male"} onChange={changeHandler}/>
            <label htmlFor="male">MALE</label>
            <input checked={gender === "female"} type="radio" id="female" value={"female"} onChange={changeHandler}/>
            <label htmlFor="female">FEMALE</label>
            <input checked={gender === "unknown"} type="radio" id='unknown' value={"unknown"} onChange={changeHandler}/>
            <label htmlFor="unknown">UNKNOWN</label>
            <button className='next-button' onClick={clickHandler}>NEXT</button>
            <FontAwesomeIcon className='back-button' onClick={() => {props.setStep(1)}} icon={faBackward} />
        </div>
    )
}

export default QuestionTwo