import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../assets/scss/tile.module.scss'
export default function tile(props) {

    return (
        <Link className={styles.link} to={`/cubes/${props.id}`}>
        <div className={styles.imgContainer}>
            <img  height="150px" src={props.url} alt='url'/>
            <div className={styles.tileContainer}>{props.title}</div>
        </div>
        </Link>
    )
}
