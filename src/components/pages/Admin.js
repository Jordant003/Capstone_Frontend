import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router';

function Admin(props) {

    const navigator = useNavigate()

    const changeHandler = (e) => {
        console.log(e)
        const name = e.target.name;
        const value = e.target.value;
        const tempAdmin = { ...props.admin };
        tempAdmin[name] = value;
        props.setAdmin(tempAdmin)
      }
  
    const clickHandler = () => {
        axios.post('http://localhost:8080/admin/login', props.admin)
        .then((response) => {
          localStorage.setItem("adminEmail", response.data.email)
          props.setAdmin(response.data)
          navigator('/notifications')
  
        })
        .catch((e) => {
          console.log(e)
        })
    }
  
  return (
    <div className='signin-box flex-col'>
      <h2>ADMIN</h2>
      <div>Email</div>
      <input className='input-box' placeholder='Email' onChange={changeHandler} value={props.admin.email} type='text' name='email' />
      <div>Password</div>
      <input className='input-box' placeholder='Password' onChange={changeHandler} value={props.admin.password} type='password' name='password' />
      <button className='submit-button' onClick={clickHandler} >Submit</button>
    </div>
  )
  }

export default Admin