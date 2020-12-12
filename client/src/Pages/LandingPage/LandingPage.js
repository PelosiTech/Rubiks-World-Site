import React, {useEffect, useState} from "react";
import {useSelector } from 'react-redux';
import { Section } from '../../components/section/section'

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer.js"
import styles from "../../assets/scss/landing.module.scss"
import CustomCarousel from '../../components/Carousel/Carousel'
import Banner from '../../components/BannerSeperator/Banner'



export default function LandingPage() {
  const [cubes_first, setCubes] = useState()
  const [cubes_second, setCubes_second] = useState()
  const [cubes_third, setCubes_third] = useState()
  const data = useSelector(state => state.cubes)

  let arr = []

    useEffect(() => {
      Object.keys(data).map(cube =>  arr.push(data[cube]))
      setCubes(arr.slice(0,5))
      setCubes_second(arr.slice(5,10))
      setCubes_third(arr.slice(10,15))
    }, [data])
    
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <div className={styles}>
          <CustomCarousel/>
        </div>
      </div>
      <div className={styles.pictureContainer}>
        <Section name={'GAN Collection'} data={cubes_first} brand="GAN"/>
        <div className={styles.bannerContainer}>
          <Banner url={"https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"}/>
        </div>
        <Section name={'MGC Collection'} data={cubes_second} brand="MGC"/>
        <div className={styles.bannerContainer}>
          <Banner url={"https://media.gettyimages.com/photos/rubiks-cube-picture-id537819350?s=2048x2048"}/>
        </div>
        <Section name={'QiYi Collection'} data={cubes_third} brand="QiYi"/>
      </div>
      <Footer/>
    </div>
  )
}