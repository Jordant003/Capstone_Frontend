import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState } from 'react'
import '../../css/modal.css'

function QuestionFive(props) {

    const [floor, setFloor] = useState()


    const clickHandler = () => {
        const body = {
            ...props.notifications,
            floor: floor
        }
        axios.post(`http://localhost:8080/notification/create`, body)
            .then((response) => {
                localStorage.setItem("floor", response.data.race)
                props.setNotifications(response.data)
                props.setStep(6)



            })
            .catch((e) => {
                console.log(e)
            })


    }

    const changeHandler = (e) => {
        setFloor(parseInt(e.target.value))
    }

    return (
        <div className='flex-col'>
            <div className='flex-row'>
                <div className='flex-col radio-toolbar'>
                    <input checked={floor === 0} type="radio" id='0' value={0} onChange={changeHandler} />
                    <label htmlFor="0">UNKNOWN</label>
                    <input checked={floor === 1} type="radio" id='1' value={1} onChange={changeHandler} />
                    <label htmlFor="1">1</label>
                    <input checked={floor === 2} type="radio" id='2' value={2} onChange={changeHandler} />
                    <label htmlFor="2">2</label>
                    <input checked={floor === 3} type="radio" id='3' value={3} onChange={changeHandler} />
                    <label htmlFor="3">3</label>
                    <input checked={floor === 4} type="radio" id='4' value={4} onChange={changeHandler} />
                    <label htmlFor="4">4</label>
                    <input checked={floor === 5} type="radio" id='5' value={5} onChange={changeHandler} />
                    <label htmlFor="5">5</label>
                    <input checked={floor === 6} type="radio" id='6' value={6} onChange={changeHandler} />
                    <label htmlFor="6">6</label>
                    <input checked={floor === 7} type="radio" id='7' value={7} onChange={changeHandler} />
                    <label htmlFor="7">7</label>
                    <input checked={floor === 8} type="radio" id='8' value={8} onChange={changeHandler} />
                    <label htmlFor="8">8</label>
                    <input checked={floor === 9} type="radio" id='9' value={9} onChange={changeHandler} />
                    <label htmlFor="9">9</label>
                    <input checked={floor === 10} type="radio" id='10' value={10} onChange={changeHandler} />
                    <label htmlFor="10">10</label>
                </div>
                <div className='flex-col radio-toolbar'>
                    <input checked={floor === 11} type="radio" id='11' value={11} onChange={changeHandler} />
                    <label htmlFor="11">11</label>
                    <input checked={floor === 12} type="radio" id='12' value={12} onChange={changeHandler} />
                    <label className='floor-button' htmlFor="12">12</label>
                    <input checked={floor === 13} type="radio" id='13' value={13} onChange={changeHandler} />
                    <label htmlFor="13">13</label>
                    <input checked={floor === 14} type="radio" id='14' value={14} onChange={changeHandler} />
                    <label htmlFor="14">14</label>
                    <input checked={floor === 15} type="radio" id='15' value={15} onChange={changeHandler} />
                    <label htmlFor="15">15</label>
                    <input checked={floor === 16} type="radio" id='16' value={16} onChange={changeHandler} />
                    <label htmlFor="16">16</label>
                    <input checked={floor === 17} type="radio" id='17' value={17} onChange={changeHandler} />
                    <label htmlFor="17">17</label>
                    <input checked={floor === 18} type="radio" id='18' value={18} onChange={changeHandler} />
                    <label htmlFor="18">18</label>
                    <input checked={floor === 19} type="radio" id='19' value={19} onChange={changeHandler} />
                    <label htmlFor="19">19</label>
                    <input checked={floor === 20} type="radio" id='20' value={20} onChange={changeHandler} />
                    <label htmlFor="20">20</label>
                </div>
                <div className='flex-col radio-toolbar'>
                    <input checked={floor === 21} type="radio" id='21' value={21} onChange={changeHandler} />
                    <label className='floor-button' htmlFor="21">21</label>
                    <input checked={floor === 22} type="radio" id='22' value={2} onChange={changeHandler} />
                    <label htmlFor="22">22</label>
                    <input checked={floor === 23} type="radio" id='23' value={23} onChange={changeHandler} />
                    <label htmlFor="23">23</label>
                    <input checked={floor === 24} type="radio" id='24' value={24} onChange={changeHandler} />
                    <label htmlFor="24">24</label>
                    <input checked={floor === 25} type="radio" id='25' value={25} onChange={changeHandler} />
                    <label htmlFor="25">25</label>
                    <input checked={floor === 26} type="radio" id='26' value={26} onChange={changeHandler} />
                    <label htmlFor="26">26</label>
                    <input checked={floor === 27} type="radio" id='27' value={27} onChange={changeHandler} />
                    <label htmlFor="27">27</label>
                    <input checked={floor === 28} type="radio" id='28' value={28} onChange={changeHandler} />
                    <label htmlFor="28">28</label>
                    <input checked={floor === 29} type="radio" id='29' value={29} onChange={changeHandler} />
                    <label htmlFor="29">29</label>
                    <input checked={floor === 30} type="radio" id='30' value={30} onChange={changeHandler} />
                    <label htmlFor="30">30</label>
                </div>
            </div>
            <div className='center'>
            <button className='next-button6' onClick={clickHandler}>NEXT</button>
            </div>
            <FontAwesomeIcon className='back-button' onClick={() => {props.setStep(4)}} icon={faBackward} />
        </div>
    )
}

export default QuestionFive