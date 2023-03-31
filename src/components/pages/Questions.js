import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Modal from '../reusables/Modal'
import QuestionFive from '../reusables/QuestionFive'
import QuestionFour from '../reusables/QuestionFour'
import QuestionOne from '../reusables/QuestionOne'
import QuestionSeven from '../reusables/QuestionSeven'
import QuestionSix from '../reusables/QuestionSix'
import QuestionThree from '../reusables/QuestionThree'
import QuestionTwo from '../reusables/QuestionTwo'
import SubmitMessage from '../reusables/SubmitMessage'

function Questions(props) {

    const [step, setStep] = useState(1)

    const [notifications, setNotifications] = useState({})


    const renderModal = () => {
        if (props.isModalOpen && step === 1) {
            return (
                <Modal title={'SUSPECT COLOR/RACE'}>
                    <QuestionOne notifications={notifications} setNotifications={setNotifications} setStep={setStep} />


                </Modal>
            )
        } else if (props.isModalOpen && step === 2) {
            return (
                <Modal title={'SUSPECT GENDER'}>
                    <QuestionTwo notifications={notifications} setNotifications={setNotifications} setStep={setStep} />
                </Modal>
            )
        } else if (props.isModalOpen && step === 3) {
            return (
                <Modal title={'NUMBER OF SUSPECTS/ATTACKERS'}>
                    <QuestionThree notifications={notifications} setNotifications={setNotifications} setStep={setStep} />

                </Modal>
            )
        } else if (props.isModalOpen && step === 4) {
            return (
                <Modal title={'WEAPONS'}>
                    <QuestionFour notifications={notifications} setNotifications={setNotifications} setStep={setStep} />


                </Modal>
            )
        } else if (props.isModalOpen && step === 5) {
            return (
                <Modal title={'FLOOR'}>
                    <QuestionFive notifications={notifications} setNotifications={setNotifications} setStep={setStep} />


                </Modal>
            )
        } else if (props.isModalOpen && step === 6) {
            return (
                <Modal title={'BUILDING LOCATION'}>
                    <QuestionSix notifications={notifications} setNotifications={setNotifications} setStep={setStep} />


                </Modal>
            )
        } else if (props.isModalOpen && step === 7) {
            return (
                <Modal title={'CLOTHING'}>
                    <QuestionSeven notifications={notifications} setNotifications={setNotifications} setStep={setStep} />


                </Modal>
            )
        } else if (props.isModalOpen && step === 8) {
            return (
                <Modal title={'SUCCESS'}>
                    <SubmitMessage setStep={setStep} />
                </Modal>
            )
        }
    }


    return (
        <div>
            {renderModal()}
        </div>
    )
}

export default Questions