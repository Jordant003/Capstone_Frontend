import React from 'react'
import '../../css/main-content.css'

function MainContent(props) {
  return (
    <div className='main-content page background-img'>
        {props.children}
    </div>
  )
}

export default MainContent