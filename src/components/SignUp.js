import React, { useState } from 'react'
import './App.css'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

//import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {
  const navigate = useNavigate()
  const EmailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+[.a-zA-Z]+$/
  const PwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/

  const [Nuser, setNUser] = useState({
    email: '',
    password: '',
    cp: '',
  })

  const [error, setError] = useState({
    EmailError: '',
    PassError: '',
    CPError: '',
  })
  const handleEmailInputChange = (event) => {
    event.persist()
    setNUser((Nuser) => ({
      ...Nuser,
      email: event.target.value,
    }))
    if (EmailRegex.test(event.target.value) === false || Nuser.email === '') {
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
    event.persist()
    setNUser((Nuser) => ({
      ...Nuser,
      password: event.target.value,
    }))
    if (PwdRegex.test(Nuser.password) === false) {
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

  const handleCPInputChange = (event) => {
    event.persist()
    setNUser((Nuser) => ({
      ...Nuser,
      cp: event.target.value,
    }))
    if (Nuser.password === Nuser.cp) {
      setError((error) => ({
        ...error,
        CPError: '',
      }))
    } else {
      setError((error) => ({
        ...error,
        CPError: 'Password and Confirm password must be same',
      }))
      return true
    }
  }

  const [submitted, setSubmitted] = useState(false)

  //const [valid, setValid] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if ((Nuser.email && !Nuser.password) || (!Nuser.email && Nuser.password)) {
      alert('All fields are mandatory')
    } else {
      if (Nuser.email && Nuser.password && Nuser.cp) {
        // setValid(true)
        //setSubmitted(true)
        navigate('/')
      }
    }
    setSubmitted(true)

    /*console.log(submitted)
    console.log(valid)
    if (submitted) {
      navigate('/Main')
    }*/
    console.log(Nuser)
    console.log(error)

    /*
    console.log(submitted)
    console.log(valid)*/
  }
  const reset = (event) => {
    event.persist()
    setNUser((Nuser) => ({
      ...Nuser,
      email: '',
      password: '',
      cp: '',
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
      <Box
        className='center'
        sx={{
          alignItems: 'center',

          width: 500,
          height: 300,
          backgroundColor: 'primary',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <h2 className='center'>Sign Up</h2>
            <TextField
              id='filled-basic'
              label='Email'
              variant='filled'
              type='email'
              value={Nuser.email}
              onChange={handleEmailInputChange}
            />
            <p style={{ color: 'red' }}>{error.EmailError}</p>
            <TextField
              id='filled-password-input'
              label='Password'
              type='password'
              variant='filled'
              // value={state.email}
              //onChange={(e) => setState({ email: e.target.value })}
              value={Nuser.password}
              onChange={handlePasswordInputChange}
            />
            <p style={{ color: 'red' }}>{error.PassError}</p>
            <TextField
              id='filled-cpassword-input'
              label='Confirm Password'
              type='password'
              variant='filled'
              value={Nuser.cp}
              //onChange={(e) => setState({ email: e.target.value })}

              onChange={handleCPInputChange}
            />
            <p style={{ color: 'red' }}>{error.CPError}</p>
            <Stack direction='row' className='center' spacing={2}>
              <Button
                variant='contained'
                color='success'
                type='submit'
                // disabled={!validateForm()}
              >
                Sign Up
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
          </Stack>
        </form>
      </Box>
    </>
  )
}

export default SignUp
