import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Main from './components/Main'
import AddNew from './components/AddNew'
import { useState } from 'react'
import MyContext from './components/UserContext'
import './components/App.css'
function App() {  
  const [user, setUser] = useState({})

  const addUserhandle = (user) => {
    setUser(user)
    console.log(user)
  }

  return (
    <div>
      <MyContext.Provider value={{ user }}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/' element={<SignIn adduser={addUserhandle} />} />
            {/* <Route path='/' element={<SignIn adduser={setUsers} />} /> */}
            <Route path='/Main' element={<Main />} />
            <Route path='/Main/AddNew' element={<AddNew />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  )
}

export default App
