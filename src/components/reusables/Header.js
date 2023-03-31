import React from 'react'
import { useNavigate } from 'react-router'

function Header(props) {

    const navigator = useNavigate()

    const signOut = () => {
        localStorage.removeItem("email")
        props.setUser({
            email: "",
            password: "",
        })
        localStorage.removeItem("adminEmail")
        props.setAdmin({
            email: "",
            password: "",
        })
        navigator("/")
    }
    

    

    const renderHeader = () => {
        if (props.user.id !== undefined) {
            return (
                <div className='header'>
                    <a href='/' className='links'>Home</a>
                    <a href='/Profile' className='links'>Profile</a>
                    <button className='signout-button' href="/" onClick={signOut}>Sign Out</button>
                </div>
            )
        } else if(props.admin.id !== undefined){
            return (
                <div className='header'>
                    <a href='/notifications' className='links'>Notifications</a>
                    <button className='signout-button' href="/" onClick={signOut}>Sign Out</button>
                </div>
            )
        } else {
            return (
                <div className='header'>
                    <a href='/' className='links'>Home</a>
                    <a href='/signUp' className='links'>Sign Up</a>
                    <h2 className='header-wrd'>Please Sign In or Sign Up</h2>
                    <a href='/signIn' className='links'>Sign In</a>
                    <a href='/admin' className='links'>Admin</a>
                </div>
            )
        }
    }

    return (
        renderHeader()
    )
}

export default Header