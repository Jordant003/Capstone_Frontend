import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router'

function SubmitMessage(props) {

    return (
        <div className='main-content flex-col'>
            <h1>HELP IS ON THE WAY!</h1>
            <a href='/' className='links home-button'>Home</a>
            <FontAwesomeIcon className='back-button' onClick={() => {props.setStep(7)}} icon={faBackward} />
        </div>


    )
}

export default SubmitMessage