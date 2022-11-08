import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import './App.css'
import { Container } from '@mui/system'

import Stack from '@mui/material/Stack'

import { useState, useEffect } from 'react'

import Axios from 'axios'


//import * as fs from 'fs'
const Main = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState([])
  const [fetch, setFetch] = useState(true)
  const [clicked, setClicked] = useState(false)

  //const { user } = useContext(MyContext)
  useEffect(() => {
    Axios.get('http://localhost:3004/details').then((res) => {
      setProduct(res.data)
    })
    setFetch(true)
  }, [])

  const clickHandle = () => {
    setClicked(true)
  }
  // const location = useLocation()
  //const LOCAL_STORAGE_KEY = 'Itemarray'
  {
    /*const renderList = props.contacts.map((contact) => {
  return (
    <ContactCard
      contact={contact}
      clickHander={deleteConactHandler}
      key={contact.id}
    />
  )
})

  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems([...items, { ...item }])
  }
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  //[] ->to run only for first render*/
  }
  {
    /*const fs = require('fs')
  fs.readFile('./details.json', 'utf8', (err, jsonString) => {
    if (err) {
      return
    }
    try {
      const customer = JSON.parse(jsonString)
    } catch (err) {
      console.log('Error parsing JSON string:', err)
    }
  })*/
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
      <p></p>
      {/*<h2>Welcome {location.item.name}</h2>
      <h2>welcome, {user.username}</h2>
      <Button onClick={fetchList}>Display List</Button>*/}

      <div>
        <Container
          fixed
          sx={{
            marginTop: 9,
          }}
        >
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size='small'
              aria-label='a dense table'
            >
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align='right'>Contact</TableCell>
                  <TableCell align='right'>Cuisine</TableCell>
                  <TableCell align='right'>Category</TableCell>
                  <TableCell align='right'>Dish</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {product.map((option, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{option.name}</TableCell>
                    <TableCell align='right'>{option.contact}</TableCell>
                    <TableCell align='right'>{option.cuisine}</TableCell>
                    <TableCell align='right'>{option.category}</TableCell>
                    <TableCell align='right'>{option.menu}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <p></p>
        </Container>
      </div>
      <Stack direction='row' className='center' spacing={2}>
        <Button
          variant='contained'
          color='success'
          type='button'
          onClick={() => {
            navigate('/Main/AddNew')
          }}
        >
          Add
        </Button>
        <Button
          onClick={() => navigate('/')}
          type='button'
          variant='contained'
          color='error'
        >
          Log Out
        </Button>
      </Stack>
    </>
  )
}

export default Main
