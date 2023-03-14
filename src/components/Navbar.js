import React from 'react'
import {Stack} from '@mui/material';
import {logo} from '../utils/constants'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import SearchBar from './SearchBar';


function Navbar() {
  return (
    <Stack direction='row' alignItems='center' p={2} sx={{ position:'sticky', background: '#000', top:0, justifyContent:'space-between' }}>
      <Link to='/' style={{ display: 'flex', alignItems:'center'}}>
        <img src={logo} alt='Logo' height={45}></img>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar