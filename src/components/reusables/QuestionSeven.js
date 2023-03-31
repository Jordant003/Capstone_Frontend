import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function QuestionSeven(props) {
    const [shirt, setShirt] = useState("")
    const [pants, setPants] = useState("")

    const navigator = useNavigate()

    const clickHandler = () => {
        const body = {
            ...props.notifications,
            shirtColor: shirt,
            pantColor: pants
        }
        axios.post(`http://localhost:8080/notification/create`, body)
            .then((response) => {
                localStorage.setItem("suspects", response.data.clothing)
                props.setNotifications(response.data)
                props.setStep(8)



            })
            .catch((e) => {
                console.log(e)
            })


    }

    const changeHandler = (e) => {
        setShirt(e.target.value)
    }

    const changePantsHandler = (e) => {
        setPants(e.target.value)
    }

    return (
        <div className='flex-row'>
            <FontAwesomeIcon className='back-button' onClick={() => {props.setStep(1)}} icon={faBackward} />
            <div className='flex-col'>
                <div className='flex-row'>
                    <div className='flex-col radio-toolbar'>
                        <h4>SHIRT/JACKET COLOR</h4>
                        <input checked={shirt === "white"} type="radio" id='white' value={"white"} onChange={changeHandler} />
                        <label htmlFor="white">WHITE</label>
                        <input checked={shirt === "black"} type="radio" id='black' value={"black"} onChange={changeHandler} />
                        <label htmlFor="black">BLACK</label>
                        <input checked={shirt === "brown"} type="radio" id='brown' value={"brown"} onChange={changeHandler} />
                        <label htmlFor="brown">BROWN</label>
                        <input checked={shirt === "blue"} type="radio" id='blue' value={"blue"} onChange={changeHandler} />
                        <label htmlFor="blue">BLUE</label>
                        <input checked={shirt === "green"} type="radio" id='green' value={"green"} onChange={changeHandler} />
                        <label htmlFor="green">GREEN</label>
                        <input checked={shirt === "red"} type="radio" id='red' value={"red"} onChange={changeHandler} />
                        <label htmlFor="red">RED</label>
                        <input checked={shirt === "orange"} type="radio" id='orange' value={"orange"} onChange={changeHandler} />
                        <label htmlFor="orange">ORANGE</label>
                        <input checked={shirt === "purple"} type="radio" id='purple' value={"purple"} onChange={changeHandler} />
                        <label htmlFor="purple">PURPLE</label>
                        <input checked={shirt === "yellow"} type="radio" id='yellow' value={"yellow"} onChange={changeHandler} />
                        <label htmlFor="yellow">YELLOW</label>
                        <input checked={shirt === "unknown"} type="radio" id='unknown' value={"unknown"} onChange={changeHandler} />
                        <label htmlFor="unknown">UNKNOWN</label>
                    </div>
                    <div className='flex-col radio-toolbar'>
                        <h4>PANTS/SHORTS COLOR</h4>
                        <input checked={pants === "white"} type="radio" id='pantwhite' value={"white"} onChange={changePantsHandler} />
                        <label htmlFor="pantwhite">WHITE</label>
                        <input checked={pants === "black"} type="radio" id='pantblack' value={"black"} onChange={changePantsHandler} />
                        <label htmlFor="pantblack">BLACK</label>
                        <input checked={pants === "brown"} type="radio" id='pantbrown' value={"brown"} onChange={changePantsHandler} />
                        <label htmlFor="pantbrown">BROWN</label>
                        <input checked={pants === "blue"} type="radio" id='pantblue' value={"blue"} onChange={changePantsHandler} />
                        <label htmlFor="pantblue">BLUE</label>
                        <input checked={pants === "green"} type="radio" id='pantgreen' value={"green"} onChange={changePantsHandler} />
                        <label htmlFor="pantgreen">GREEN</label>
                        <input checked={pants === "red"} type="radio" id='pantred' value={"red"} onChange={changePantsHandler} />
                        <label htmlFor="pantred">RED</label>
                        <input checked={pants === "orange"} type="radio" id='pantorange' value={"orange"} onChange={changePantsHandler} />
                        <label htmlFor="pantorange">ORANGE</label>
                        <input checked={pants === "purple"} type="radio" id='pantpurple' value={"purple"} onChange={changePantsHandler} />
                        <label htmlFor="pantpurple">PURPLE</label>
                        <input checked={pants === "yellow"} type="radio" id='pantyellow' value={"yellow"} onChange={changePantsHandler} />
                        <label htmlFor="pantyellow">YELLOW</label>
                        <input checked={pants === "unknown"} type="radio" id='pantunknown' value={"unknown"} onChange={changePantsHandler} />
                        <label htmlFor="pantunknown">UNKNOWN</label>
                    </div>
                </div>
                <div className='center'>
                    <button className='next-button6' onClick={clickHandler}>NEXT</button>
                    <FontAwesomeIcon className='back-button' onClick={() => {props.setStep(6)}} icon={faBackward} />
                </div>
            </div>
        </div>
    )
}

export default QuestionSeven