import '../../App.css';
import '../../css/main-content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router'
import { AwesomeButton } from 'react-awesome-button';

function Home(props) {

  const navigator = useNavigate()

  const clickHandler = () => {
    navigator('/questions')

  }

  const renderContent = () => {
    if (props.user.id !== undefined) {
      return (
        <button onClick={clickHandler} className='emergency-button'>EMERGENCY</button>
      )
    } else {
      return (
        null
      )
    }
  }

  return (
    <div>
      {renderContent()}
    </div>
  )
}

export default Home