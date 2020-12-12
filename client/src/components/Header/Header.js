import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from '../../assets/scss/header.module.scss'
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom'
import { logout } from '../../Redux/actions/authActions'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Header() {
  const dispatch = useDispatch();
  const currentId = useSelector(state => state.auth.id)
  const history = useHistory()
  const cart = useSelector(state => state.carts)
  const renderOut = () => {
    if (!currentId) {
      return (
        <>
          <Button variant="outlined" onClick={() => history.push('/login')}>Login</Button>
          <Button variant="outlined" onClick={() => history.push('/signup')}>Sign Up</Button>
        </>
      )
    } else {
      return (
        <>
          <Button variant="outlined" onClick={() => dispatch(logout()) }>Logout</Button>
          <Button variant="outlined" onClick={() => history.push('/cart')} ><ShoppingCartIcon/>({cart.length})</Button>
        </>
      )
    }
    
  }
  return (
    <div className={styles.header_container}>
      <NavLink to="/"
        className={styles.logoMain}>Rubik's World
      </NavLink>

      <div className={styles.header_right_links}>
        <Button variant="outlined">Discover</Button>
        {renderOut()}
        <Button variant="outlined" onClick={() => history.push('/search')}><SearchIcon/></Button>
      </div>
    </div>
  )
}
