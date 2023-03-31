import logo from './logo.svg';
import './App.css';
import PageWrapper from './components/reusables/PageWrapper';
import { Route, Routes, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Admin from './components/pages/Admin';
import { AwesomeButton } from 'react-awesome-button';
import Questions from './components/pages/Questions';
import Notifications from './components/pages/Notifications';
import UserLocation from './components/pages/UserLocation';
import Profile from './components/pages/Profile';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(true)

  const [activeNotification, setActiveNotification] = useState()

  const [user, setUser] = useState({
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

  const [admin, setAdmin] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    const email = localStorage.getItem("email")
    const adminEmail = localStorage.getItem("adminEmail")
    if (email != null) {
      axios.get(`http://localhost:8080/user/getUserByEmail/${email}`)
        .then((response) => {
          setUser(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    } else if (adminEmail != null) {
      axios.get(`http://localhost:8080/admin/getAdminByEmail/${adminEmail}`)
        .then((response) => {
          setAdmin(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    }

  }, [])



  return (
    <PageWrapper user={user} setUser={setUser} admin={admin} setAdmin={setAdmin}>
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/UserLocation' element={<UserLocation activeNotification={activeNotification} admin={admin} />} />
        <Route path='/notifications' element={<Notifications setActiveNotification={setActiveNotification} admin={admin} setAdmin={setAdmin} />} />
        <Route path='/questions' element={<Questions user={user} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />} />
        <Route path='/admin' element={<Admin admin={admin} setAdmin={setAdmin} />} />
        <Route path='/SignIn' element={<SignIn user={user} setUser={setUser} />} />
        <Route path='/SignUp' element={<SignUp user={user} setUser={setUser} />} />
        <Route path='/Profile' element={<Profile user={user} setUser={setUser} />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
