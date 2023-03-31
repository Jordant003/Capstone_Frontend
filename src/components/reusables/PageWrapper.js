import React from 'react'
import Header from './Header'
import MainContent from './MainContent'

function PageWrapper(props) {
  return (
    <div className='flex-col page'> 
        <Header user={props.user} setUser={props.setUser} admin={props.admin} setAdmin={props.setAdmin}/>
        <MainContent>
            {props.children}
        </MainContent>
    </div>
  )
}

export default PageWrapper