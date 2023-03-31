import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import '../../css/signin.css'

function Profile(props) {
    const [isStudent, setIsStudent] = useState(false)
    const [isStaff, setIsStaff] = useState(false)

    const navigator = useNavigate()
  
    const changeHandler = (e) => {
      console.log(e)
      const name = e.target.name;
      const value = e.target.value;
      const tempUser = { ...props.user }
      tempUser[name] = value;
      props.setUser(tempUser)
    }
  
    const clickHandler = () => {
      const body = {
        ...props.user,
        isStaff,
        isStudent
      }
      console.log(body)
      axios.post(`http://localhost:8080/user/update`, body)
        .then((response) => {
          localStorage.setItem("email", response.data.email)
          props.setUser(response.data)
    
        })
        .catch((e) => {
          console.log(e)
        })
    }

    const deleteHandler = (e) => {
      const userId = e.target.value
      axios.delete(`http://localhost:8080/user/delete/${userId}`)
      .then(() => { 
        props.setUser({
          name: "",
          email: "",
          password: "",
          phoneNumber: null,
          city: "",
          state: "",
          isStudent: "",
          isStaff: "",
          schoolOrCompany: ""
        })
        navigator('/')
      })
      .catch((e) => {
        console.log(e)
      })

    }
  
    const onChangeStudent = (e) => {
      setIsStudent(!isStudent)
      console.log(e)
    }
  
    const onChangeStaff = (e) => {
      setIsStaff(!isStaff)
      console.log(e)
    }
  
  
  
    return (
      <div className='signup-box flex-col'>
        <div>Name</div>
        <input className='input-box' placeholder='Name' onChange={changeHandler} value={props.user.name} type='text' name='name' />
        <div>Email</div>
        <input className='input-box' placeholder='Email' onChange={changeHandler} value={props.user.email} type='text' name='email' />
        <div>Password</div>
        <input className='input-box' placeholder='Password' onChange={changeHandler} value={props.user.password} type='password' name='password' />
        <div>Phone Number</div>
        <input className='input-box' placeholder='Phone Number' onChange={changeHandler} value={props.user.phoneNumber} type='number' name='phoneNumber' />
        <div>City</div>
        <input className='input-box' placeholder='City' onChange={changeHandler} value={props.user.city} type='text' name='city' />
        <div>State</div>
        <input className='input-box' placeholder='State' onChange={changeHandler} value={props.user.state} type='text' name='state' />
        <div>Student: <input onChange={onChangeStudent} value={props.user.isStudent} type='checkbox' name='isStudent' /></div>
        <div>Staff: <input onChange={onChangeStaff} value={props.user.isStaff} type='checkbox' name='isStaff' /></div>
        <div>School or Company</div>
        <input className='input-box' placeholder='School/Company' onChange={changeHandler} value={props.user.schoolOrCompany} type='text' name='schoolOrCompany' />
        <button className='submit-button' onClick={clickHandler}>Submit</button>
        <button className='delete-button' onClick={deleteHandler} value={props.user.id} >DELETE ACCOUNT</button>
      </div>
    )
  }

export default Profile