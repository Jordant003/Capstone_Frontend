import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router';
import '../../css/signin.css'

function SignIn(props) {

  const navigator = useNavigate()

  const changeHandler = (e) => {
      console.log(e)
      const name = e.target.name;
      const value = e.target.value;
      const tempUser = { ...props.user };
      tempUser[name] = value;
      props.setUser(tempUser)
    }

  const clickHandler = () => {
      axios.post('http://localhost:8080/user/login', props.user)
      .then((response) => {
        localStorage.setItem("email", response.data.email)
        props.setUser(response.data)
        navigator('/')

      })
      .catch((e) => {
        console.log(e)
      })
  }

return (
  <div className='signin-box flex-col'>
    <h2>SIGN IN</h2>
    <div>Email</div>
    <input className='input-box' placeholder='Email' onChange={changeHandler} value={props.user.email} type='text' name='email' />
    <div>Password</div>
    <input className='input-box' placeholder='Password' onChange={changeHandler} value={props.user.password} type='password' name='password' />

    <button className='submit-button' onClick={clickHandler} >Submit</button>
  </div>
)
}
export default SignIn