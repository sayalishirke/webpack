import React, { useState, useEffect} from 'react'
import './App.css'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
//import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import Axios from 'axios'


const SignIn = (props) => {
  const navigate = useNavigate()
  const LOCAL_STORAGE_KEY = 'Users'
  const EmailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+[.a-zA-Z]+$/
  const PwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    id: uuid(),
    username: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState({
    EmailError: '',
    PassError: '',
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users))
  }, [users])
  const handleUsernameInputChange = (event) => {
    setUser((user) => ({
      ...user,
      username: event.target.value,
    }))
  }
  const handleEmailInputChange = (event) => {
    setUser((user) => ({
      ...user,
      email: event.target.value,
    }))
    if (EmailRegex.test(user.email) === false || user.email === '') {
      setError((error) => ({
        ...error,
        EmailError: 'Please enter valid email adress',
      }))
    } else {
      setError((error) => ({
        ...error,
        EmailError: '',
      }))
      return true
    }
  }

  const handlePasswordInputChange = (event) => {
    setUser((user) => ({
      ...user,
      password: event.target.value,
    }))
    if (PwdRegex.test(user.password) === false) {
      setError((error) => ({
        ...error,
        PassError: 'Please enter valid password',
      }))
    } else {
      setError((error) => ({
        ...error,
        PassError: '',
      }))
      return true
    }
  }

  const [submitted, setSubmitted] = useState(false)

  //const [valid, setValid] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if ((user.email && !user.password) || (!user.email && user.password)) {
      alert('All fields are mandatory')
    } else {
      if (user.email && user.password) {
        // setValid(true)
        //setSubmitted(true)

        Axios.post('http://localhost:3004/users', {
          id: user.id,
          username: user.username,
          email: user.email,
          password: user.password,
        }).then((res) => {
          //console.log(res.data)
        })
        props.adduser(user)
        navigate('/Main')
        //console.log(state)
        //setUsers([...users, { id: uuid(), ...user }])
      }
    }
    setSubmitted(true)

    /*console.log(submitted)
    console.log(valid)
    if (submitted) {
      navigate('/Main')
    }*/
    //console.log(user)
    //console.log(error)

    /*
    console.log(submitted)
    console.log(valid)*/
  }
  const reset = (event) => {
    event.persist()
    setUser((user) => ({
      ...user,
      email: '',
      password: '',
    }))
  }
  return (
    <>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdFKAx5fhuJHLX7trX2q5nst3pmTiJIrqfw&usqp=CAU'
        alt='logo'
        width='150'
        height='150'
        className='center'
      />
      {/* <MyContext.Provider value={{ user }}>
        <Header />*/}

      <Box
        className='center'
        sx={{
          alignItems: 'center',

          width: 500,
          height: 300,
          backgroundColor: 'primary',
        }}
      >
        <form id='myform' onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <h2 className='center'>Sign In</h2>
            <TextField
              id='filled-basic'
              label='Username'
              variant='filled'
              type='text'
              value={user.username}
              onChange={handleUsernameInputChange}
            />
            <TextField
              id='filled-basic'
              label='Email'
              variant='filled'
              type='text'
              value={user.email}
              onChange={handleEmailInputChange}
            />
            {/*{submitted && !user.email && <p>{error.EmailError}</p>}*/}
            <p style={{ color: 'red' }}>{error.EmailError}</p>
            <TextField
              id='filled-password-input'
              label='Password'
              type='password'
              variant='filled'
              value={user.password}
              onChange={handlePasswordInputChange}
            />
            {/*{submitted && !user.password && <span>{error.PassError}</span>}*/}
            <p style={{ color: 'red' }}>{error.PassError}</p>
            <Stack direction='row' className='center' spacing={2}>
              <Button variant='contained' color='success' type='submit'>
                Sign In
              </Button>

              <Button
                variant='contained'
                color='error'
                type='button'
                onClick={reset}
              >
                Cancel
              </Button>
            </Stack>

            <Stack direction='row'>
              <h4>Dont have account?</h4>
              <Button onClick={() => navigate('/SignUp')} type='button'>
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </>
  )
}

export default SignIn
