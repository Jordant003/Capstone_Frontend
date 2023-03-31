import { faBackward, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../../css/modal.css'

function Modal(props) {

    const closeModal = () => {
        props.setIsModalOpen(false)
    }

  return (
    <div className='modal-backround'>
        <div className='modal flex-col'>
            <div className='modal-header'>
            </div>
            <h1 className='center'>{props.title}</h1>
            <div className='modal-body'>
                {props.children}
            </div>
            <div className='footer'></div>
        </div>
    </div>
  )
}

export default Modal