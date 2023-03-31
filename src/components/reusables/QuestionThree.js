import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'

function QuestionThree(props) {

    const [suspects, setSuspects] = useState()


    const clickHandler = () => {
        const body = {
            ...props.notifications,
            numberOfSuspects: suspects
        }
        axios.post(`http://localhost:8080/notification/create`, body)
            .then((response) => {
                localStorage.setItem("suspects", response.data.numberOfSuspects)
                props.setNotifications(response.data)
                props.setStep(4)


            })
            .catch((e) => {
                console.log(e)
            })

            
    }

    const changeHandler = (e) => {
        setSuspects(parseInt(e.target.value))
      }

    return (
        <div className='flex-col radio-toolbar'>
            <input checked={suspects === 1} type="radio" id="1" value={1} onChange={changeHandler}/>
            <label htmlFor="1">1</label>
            <input checked={suspects === 2} type="radio" id="2" value={2} onChange={changeHandler}/> 
            <label htmlFor="2">2</label>
            <input checked={suspects === 3} type="radio" id='3' value={3} onChange={changeHandler}/> 
            <label htmlFor="3">3</label>
            <input checked={suspects === 4} type="radio" id='4' value={4} onChange={changeHandler}/>
            <label htmlFor="4">4</label>
            <input checked={suspects === 5}  type="radio" id='5' value={5} onChange={changeHandler}/> 
            <label htmlFor="5">5+</label>
            <input checked={suspects === 0} type="radio" id="0" value={0} onChange={changeHandler}/> 
            <label htmlFor="0">UNKNOWN</label>
            <button className='next-button' onClick={clickHandler}>NEXT</button>
            <FontAwesomeIcon className='back-button' onClick={() => {props.setStep(2)}} icon={faBackward} />
        </div>
    )
}

export default QuestionThree