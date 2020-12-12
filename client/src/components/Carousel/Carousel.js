import React from 'react';
import Carousel from 'react-material-ui-carousel'
import styles from '../../assets/scss/carousel.module.scss'
export default function CustomCarousel()
{
    const items = [
        "https://images.unsplash.com/photo-1515508268448-8d0d292bc49a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
        ,
        "https://images.unsplash.com/photo-1483782817618-9804403024ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2273&q=80"
        ,
        "https://images.unsplash.com/photo-1558527808-d740ad1d8399?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    ];

    return (
        <Carousel className={styles.formatImg} autoPlay>
            {
                items.map( (item, i) => <img height="600px" width="1339px" key={i} src={item}  alt='url'/> )
            }
        </Carousel>
    )
}