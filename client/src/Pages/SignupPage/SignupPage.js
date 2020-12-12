import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer.js"
import styles from '../../assets/scss/login.module.scss'
import { Redirect } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux';
import { signup } from '../../Redux/actions/authActions'


export default function SignUpPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const currentId = useSelector(state => state.auth.id)


  const onSignIn = () => {
    dispatch(signup(username, email, password))
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
            <h2>Sign Up</h2>
          </div>
          <label htmlFor="username" className={styles.labelText}>Username</label>
          <input type="text" name="username" className={styles.inputs} value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="email" className={styles.labelText}>Email</label>
          <input type="text" name="email" className={styles.inputs} value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password" className={styles.labelText}>Password</label>
          <input type="password" name="password"  className={styles.inputs} value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className={styles.buttonContainer}>
          <button className={styles.bottomButtons} onClick={onSignIn}>Sign Up</button>
        </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
  
}
