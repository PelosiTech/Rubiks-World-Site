import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer.js"
import styles from '../../assets/scss/login.module.scss'
import { NavLink, Redirect } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/actions/authActions'
import { useHistory } from 'react-router-dom'


export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const currentId = useSelector(state => state.auth.id)

  const demo = () => {
    dispatch(login('demo@demo.com', 'password'))
    history.goBack()
  }

  const onLogin = () => {
    dispatch(login(email, password))
    history.goBack()
  }

  if(currentId) return <Redirect to="/"/>

  return (
    <>
      <Header/>
      <div className={styles.outContainer}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img height="500" width="600" src="https://images.unsplash.com/photo-1552900144-5a8ca71fd614?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"  alt='url'/>
        </div>
        
        <div className={styles.rightContainer}>
          <div className={styles.loginText}>
            <h2>Login</h2>
          </div>
          <label htmlFor="email" className={styles.labelText}>Email</label>
          <input type="text" name="email" className={styles.inputs} value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password" className={styles.labelText}>Password</label>
          <input type="password" name="password"  className={styles.inputs} value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className={styles.bottomLink}>
            <p><NavLink className={styles.bottomLink} to="/signup">CREATE ACCOUNT</NavLink></p>
          </div>
          <div className={styles.buttonContainer}>
              <button className={styles.bottomButtons} onClick={onLogin}>Login</button>
                <div>
              <button className={styles.bottomButtons} onClick={demo}>Demo</button>
        </div>
              </div>

        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
  
}
