import React, { useContext } from 'react'
import './App.css'

import MyContext from './UserContext'
const Header = () => {
  const { user } = useContext(MyContext)

  return (
    <>
      <h2>welcome, {user.username}</h2>
    </>
  )
}

export default Header
